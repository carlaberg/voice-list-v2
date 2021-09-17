import React, { Component, ReactNode, ReactElement } from "react";
import { ModalWrapper, ModalContent } from "./styles";
import Portal from "../Portal";
import { useOnClickOutside } from '../../lib/hooks/useClickOutside'

interface ModalProps {
  children: () => ReactNode | ReactElement;
  toggle?: () => void;
  on: boolean,
  closeOnContentClick?: boolean;
}

const Modal = ({ children, toggle, on, closeOnContentClick = true }: ModalProps) =>  {
  const handleClick =() => {
    if (on) {
      toggle();
    }
  }
  const clickRef = React.useRef();
  useOnClickOutside(clickRef, () => handleClick());
  return (
    <Portal selector="#modal">
      <ModalWrapper
        hidden={!on}
      >
        <ModalContent ref={clickRef}>
            {children()}
        </ModalContent>
      </ModalWrapper>
    </Portal>
  );
}

export default Modal;