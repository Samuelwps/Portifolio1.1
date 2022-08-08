import styled from "styled-components"

export const Container = styled.div`

    max-width:1440px;

    display:flex;
    justify-content:space-around;

    margin:0 auto;

    padding:2rem;
`

export const Message = styled.div`
    display:flex;
`

export const TextMessage = styled.div`
    min-height: 10rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    text-align: center;

    
`

export const IniciarProjeto = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;

    div{
        margin-right:1rem;

        width:40px;
        height:2px;

        background: var(--yellow-500);
    }

`