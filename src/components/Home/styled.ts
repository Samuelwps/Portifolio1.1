import styled from "styled-components"

export const Container = styled.div`
    margin: 0 auto;

    display:flex;
    flex-direction:row;
    justify-content:space-around;

    padding: 6.5rem 0rem 3rem 0rem;

    margin-left:30px;
    margin-right:2rem;

    border-bottom: 1px solid var(--gray-800);

    @media screen and (max-width:940px){
        flex-direction:column;
        align-items:center;
    }

`;

export const Me = styled.div`
    display:flex;
    flex-direction:column;

    @media screen and (max-width:940px){
        align-items:center;
    }

    h1{     
        padding-top: 0.1rem;
        font-size:3rem;
    }

    p{
        padding:1.5rem;
        color:var(--yellow-500);
        font-size:1.5rem;
    }
`;
export const Links = styled.div`
    padding-top:2rem;
    .icons{
        width:3rem;
        height:3rem;
        margin-right:1rem;
    }
`;

export const About = styled.div`
    width:30rem;
    padding-top:3.8rem;

    @media screen and (max-width:940px){
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

        p{
            margin:2rem;
            display:flex;
            align-items:center;
            text-align:center;
        }
    }

    p{
        padding-top:1rem;
        display:flex;
        flex-wrap: wrap;
        font-size: 1.3rem;
    }

    h1{
        font-size:1.5rem;
        color:var(--yellow-500);
    }
`;