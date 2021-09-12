import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
`

export const ResultList = styled.ul`
    width: 100%;
    position: absolute;
    top: calc(100% + ${({ theme }) => theme.gutterSmall});
    left: 0;
    background: red;
`