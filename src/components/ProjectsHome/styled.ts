import styled from "styled-components"


export const SectionWorks = styled.section`
        margin:2rem;
`; 


export const ListItem = styled.div`
       
        margin:0 auto;
        display: flex;
        align-items: center;
        justify-content:space-around;


        &:first-child{@media screen and (max-width:1080px){
                flex-direction: column-reverse;
        }}
        @media screen and (max-width:1080px){
                flex-direction: column;
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

export const SelectedWorks = styled.div`
        border-right: 1px solid var(--gray-800);

        @media screen and (max-width:1080px){
                display: flex;
                align-items: center;
                justify-content: center;
                max-width: 10rem;
        }
        


`;

export const ProjectsWorks = styled.div`
        margin:1rem;
        display:flex;
        flex-direction:column;

        @media screen and (max-width:1080px){ 
                transform: rotate(-90deg) translate3d(-20px,-6px,0);
                min-width: 25rem;
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
                                max-width:7rem;
                                max-height:7rem;
                        }
                }
        }
`;

export const DivForWorks = styled.div`
        max-width: 1200px;
        display:flex;
        margin: 0 auto;
        justify-content:center;
        padding:2rem;
        flex-direction:row;
        justify-content:space-around;
        
        padding: 6.5rem 0rem 3rem 0rem;
`;