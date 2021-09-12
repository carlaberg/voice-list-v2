import styled from 'styled-components';
import { breakpoint, HalignMedium } from '../../layout/mixins'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  z-index: 9998;
  display: ${({ hidden }) => hidden ? 'none' : 'flex'};
  overflow-y: auto;
  background: rgba(0,0,0,0.8);
`

export const ModalContent = styled(HalignMedium)`
  width: 100%;
  margin-top: ${({ theme }) => theme.gutterLarge};
  margin-bottom: ${({ theme }) => theme.gutterLarge};
  position: relative;
  z-index: 9999;

  ${breakpoint.up('tablet')`
    padding: 0;
  `}  
`