import styled from 'styled-components'
import Card from '../Card'

export const Wrapper = styled(Card)<{
    hidden: boolean
}>`
    position: absolute;
    right: 0;
    top: 100%;
    display: ${({ hidden }) => hidden ? 'none' : 'block'};  

`