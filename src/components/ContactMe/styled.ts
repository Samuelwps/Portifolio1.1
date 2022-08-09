import styled from "styled-components"

export const Container = styled.div`

    max-width:1440px;

    min-height: 20rem;

    margin:0 auto;

    padding:2rem;

    border-top: 1px solid var(--gray-800);
`

export const ContainerMessage = styled.div`
    max-width: 1040px;
    
    margin:0 auto;

    display:flex;
    justify-content:center;
    justify-content:space-between;
    align-items:center;

    padding:2rem;
`


export const Message = styled.div`
    display:flex;   
`


export const MessageData = styled.div`
    background: rgba(36, 35, 35, 0.3);
    border-radius: 2px;


    min-width:550px;

    min-height:500px;

    padding:1.3rem;

    display:flex;
    align-items:center;
    justify-content:center;
    justify-content:space-around;
    flex-direction:column;
    
    border-radius: 8px;

    input{
        width:100%;
        padding:1.7rem;

        border-radius: 5px;

        border:none;
        background:var(--background);
    }

    textarea{
        width:100%;
        height:10rem;

        padding:1rem;

        border-radius: 5px;
        border:none;
        background:var(--background);

        resize:none;
    }
`


export const TextMessage = styled.div`
    max-height: 15rem;

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