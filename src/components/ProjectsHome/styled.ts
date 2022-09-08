import styled, { css } from "styled-components";


export const Container = styled.section`
        max-width:1440px;
        margin:0 auto;

`; 

export const DivForWorks = styled.div`
        display:flex;
        justify-content:center;
        margin:2rem;
        flex-direction:row;
        justify-content:space-around;
        
        padding: 6.5rem 0rem 3rem 0rem;

        border-top:1px solid var(--gray-800);
`;

export const ButtonAco = styled.button`
        margin:0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-family: 'Jura', sans-serif;
        font-size:1.5rem;
        border: 0;

        cursor: pointer;
        background-color: transparent;

        padding: 8px 16px;
        margin-top: 16px;

        color:white;
`

export const Arrows = styled.div<ContentProps>`
        ${({content}) => content && css`
                transform: rotate(90deg);
        `}
        transition: 0.5s ease;
`
interface ContentProps{
        content: boolean
}

export const ContentAco = styled.div<ContentProps>`
        width: 0 auto;
        opacity: 0;
        transform: translateY(0px);
        max-height: 0;
        pointer-events: none;
        ${({content}) => content && css`
        max-height: min-content;
        transform: translateY(5px);
        pointer-events: auto;
        opacity: 1 ;
        ;
        `}

        transition: .5s ease;

        p{
                text-align: center;
        }
`

export const DivCSS = styled.div`
        margin:1rem;
        max-width:50rem;
`

export const SelectedWorks = styled.div`
        border-right: 1px solid var(--gray-800);

        @media screen and (max-width:1180px){
                display: flex;
                align-items: center;
                justify-content: center;
                max-width: 7rem;
        }
`;

export const ProjectsWorks = styled.div`
        padding:1rem;
        display:flex;
        flex-direction:column;

        @media screen and (max-width:1180px){ 
                transform: rotate(-90deg) translate3d(-20px,-6px,0);
                min-width: 26rem;
        }

        h2{
                font-size: 1.8rem;
                font-weight:400;
                @media screen and (max-width:1080px){ 
                        font-size: 2.5rem;
                }

                
        }

        p{
                color: var(--gray-100);
        }
`;

export const ListItem = styled.div`
        margin:0 auto;
        display: flex;
        align-items: center;
        justify-content:space-around;
        max-width:50rem;

        @media screen and (max-width:1180px){
                flex-direction: column;
        }

`;

export const ListItemReverse = styled.div`
        margin:0 auto;
        display: flex;
        max-width:50rem;
        align-items: center;
        justify-content:space-around;

        @media screen and (max-width:1180px){
                flex-direction: column-reverse;
        }
`

export const DivWorks = styled.div`
        max-width:20rem;
        display:flex;
        flex-direction:column;
        margin:3rem;
        font-size:1.5rem;

        div{
                display:flex;
                justify-content:center;
                align-items:center;
                padding:1rem;


                h1{
                        font-size:4rem;
                        opacity:0.1;
                        padding-right:1rem;
                }

                h2{
                        font-size:3rem;
                }

                h4{
                        font-size:1.5rem;
                }
        }

        p{
                display:flex;
                text-align:center;
        }


        .Arrow{
                display:flex;

                a{
                        display:flex;
                        justify-items:center;
                        align-items:center;
                        color:var(--yellow-500);
                        text-decoration:none;
                        transition:0.5s;
                        &:hover{
                                transform: scale(1.1);
                        }

                        img{
                                max-width:4rem;
                                max-height:4rem;
                        }
                }
        }
`;

export const Imgworks = styled.div`
        max-width:20rem;
        max-height:20rem;

        img{
                width:100%;
                height:100%;        
        }
`;





