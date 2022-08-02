import styled from "styled-components"

export const Container = styled.div`

    max-width:1440px;

    display:flex;
    justify-content:space-around;

    margin:0 auto;

    padding:2rem;
`

export const TextAbout = styled.div`
    display:flex;
    flex-direction:column;

    h1{     
        padding-top: 0.1rem;
        font-size:3rem;
    }
    
    h2{
        font-size:1.5rem;
        color:var(--yellow-500);
    }
`

export const ImagesAbout = styled.div`
    color:red;
`