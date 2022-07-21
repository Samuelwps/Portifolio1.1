import styled from "styled-components"

export const Container = styled.header`
    width:100%;
    height: 5rem;

    display:flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;

    background: rgba(36, 35, 35, 0.1);
    mix-blend-mode: normal;
    backdrop-filter: blur(4px);

    font-family: 'Jura', sans-serif;
    font-weight:400;
    font-size: 1.3rem;
`;

export const Ullist = styled.ul`
    display:flex;
    margin:3rem;

    li{
        list-style: none;    

        &:first-child{
            padding-right: 3rem;
        }
    }

    li a{
        padding:0.5rem;
        color:var(--white);
        text-decoration:none;
        transition:0.5s;

        &:hover{
            color:var(--yellow-500);
        }
    }


`;