import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background: ${({ theme }) => theme.colorGray};
`

export const PlaceHolder = styled.div`    
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`