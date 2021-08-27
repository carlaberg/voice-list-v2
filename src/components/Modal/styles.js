import styled from 'styled-components';
import { HalignMedium } from '../../layout/mixins'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 9998;
  display: ${({ hidden }) => hidden ? 'none' : 'flex'};
`

export const Overlay= styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
`

export const ModalContent = styled(HalignMedium)`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 9999;
`