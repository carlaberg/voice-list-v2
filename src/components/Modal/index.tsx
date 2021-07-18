import React, { Component, ReactNode } from "react";
import { Transition, config } from "react-spring";
import { ModalWrapper, Overlay, ModalContent } from "./styles";
import Portal from "../Portal";

interface ModalProps {
  children: () => ReactNode;
  toggle: () => void;
  on: boolean,
  closeOnContentClick?: boolean;
}

class Modal extends Component<ModalProps> {
  handleClick() {
    const { toggle, on } = this.props;
    if (on) {
      toggle();
    }
  }

  render() {
    const { children, toggle, on, closeOnContentClick = true } = this.props;
    return (
      <Transition
        native
        from={{ opacity: 0, y: "50px", scale: "0.5" }}
        enter={{ opacity: 1, y: "0px", scale: "1" }}
        leave={{ opacity: 0, y: "50px", scale: "0" }}
      >
        {on &&
          (styles => (
            <Portal selector="#modal">
              <ModalWrapper
                onClick={() => {
                  !closeOnContentClick && this.handleClick();
                }}
                style={{
                  // @ts-ignore
                  opacity: styles.opacity.interpolate(opacity => opacity)
                }}
              >
                <Overlay
                  onClick={() => {
                    closeOnContentClick && this.handleClick();
                  }}
                />
                <ModalContent
                  style={{
                    // @ts-ignore
                    opacity: styles.opacity.interpolate(opacity => opacity),
                    // @ts-ignore
                    transform: styles.y.interpolate(
                      y => `translate3d(0, ${y}, 0)`
                    )
                  }}
                  // @ts-ignore
                  config={config.fast}
                >
                  {children()}
                </ModalContent>
              </ModalWrapper>
            </Portal>
          ))}
      </Transition>
    );
  }
}

export default Modal;