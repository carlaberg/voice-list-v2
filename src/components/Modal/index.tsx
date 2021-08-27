import React, { Component, ReactNode } from "react";
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
      <Portal selector="#modal">
        <ModalWrapper
          hidden={!on}
          onClick={() => {
            !closeOnContentClick && this.handleClick();
          }}
        >
          <Overlay
            onClick={() => {
              closeOnContentClick && this.handleClick();
            }}
          />
          <ModalContent>
              {children()}
          </ModalContent>
        </ModalWrapper>
      </Portal>
    );
  }
}

export default Modal;