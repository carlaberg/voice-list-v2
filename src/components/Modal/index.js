import React, { Component } from "react";
import { Transition, config } from "react-spring";
import { ModalWrapper, Overlay, ModalContent } from "./styles";
import Portal from "../Portal";

class Modal extends Component {
  handleClick() {
    const { toggle, on } = this.props;
    if (on) {
      toggle();
    }
  }

  render() {
    const { children, toggle, on, closeOnContentClick } = this.props;
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
                    opacity: styles.opacity.interpolate(opacity => opacity),
                    transform: styles.y.interpolate(
                      y => `translate3d(0, ${y}, 0)`
                    )
                  }}
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

Modal.defaultProps = {
  closeOnContentClick: true
};

export default Modal;