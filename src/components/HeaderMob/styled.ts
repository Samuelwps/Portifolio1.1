import styled, { css } from "styled-components";
import { IoClose } from 'react-icons/io5';

interface VisibleMenuProps{
    isVisible: boolean;
}

export const Container = styled.section<VisibleMenuProps>`
    position: fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 5;
    display: flex;
    align-items: center;
    flex-direction:column;
    justify-content: center;

    background: rgba(36, 35, 35, 0.1);
    backdrop-filter: blur(4px);

    opacity: 0;
    pointer-events: none;

    nav{
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

        a{
        font-size:3rem;
        margin: 10px;
        padding:0.5rem;
        color:var(--white);
        text-decoration:none;
        transition:0.5s;

        &:hover{
            color:var(--yellow-500);
        }
        }

    }

    ${({isVisible}) => isVisible && css`
    transition: .5s ease;
    opacity: 1;
    pointer-events: auto;
    `}
`