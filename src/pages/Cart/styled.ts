import styled from "styled-components"

export const Container = styled.section`
    padding-top: 5rem;
    max-width:1440px;
    margin:0 auto;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`

export const ProjectHeader = styled.div`    
        width:100%;
        display:flex;
        flex-direction:column;
`;

export const DivContent = styled.div`
        display:flex;;
        align-items:center;
        justify-content: center;
        margin:1.5rem;

        @media screen and (max-width:940px){
                flex-direction: column;
        }
`

export const DivTitle = styled.div`
        max-width: 400px;

        display:flex;;
        flex-direction: column;
        margin:3rem;
        justify-content: center;
        align-items:center;

        font-size:1.5rem;

        p{
                text-align: center;
                max-width:40rem;
                padding-top:3rem;
        }

`

export const Title = styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;

        div{
                background: var(--yellow-500);
                width:2.3rem;
                margin-right:0.5rem;
                height:2px;
        }

        h4{
                font-size:2rem;
        }
`;

export const DivImage = styled.div`
        max-width:35rem;
        max-height:35rem;
        background:var(--background);

        img{
                width:100%;
                height:100%;
        }
`
