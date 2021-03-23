import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { keyframes } from 'styled-components'

const animB = keyframes`
    from{transform: scale(1.3)}
    to{transform: scale(1)}
`

export const Button = styled(Link)`
    position: relative;
    background: ${({ primary }) => (primary ? "#000d1a": "#CD853F")};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({big}) => (big ? "16px 40px" : "14px 24px")};
    color: ${({primary}) => (primary ? "#fff" : "#000d1a")};
    font-size: ${({big}) => (big ? '20px': '14px')};
    animation-name: ${({ animation }) => (animation && animB)};
    animation-duration: 0.6s;

    &:hover{
        transform: translateY(-2px);
    }
    
`