import styled from "styled-components"


export const SectionWorks = styled.section`
        
        max-width: 1200px;
        display:flex;
        margin: 0 auto;
        justify-content:center;
        flex-direction:row;
        justify-content:space-around;
        

        padding: 6.5rem 0rem 3rem 0rem;
           
`; 


export const ListItem = styled.div`
       
        margin:0 auto;
        display: flex;
        align-items: center;
        justify-content:space-around;

        padding-top: 0.5rem;
        padding-bottom: 0.5rem;

`;

export const SelectedWorks = styled.div`
        border-right: 1px solid var(--gray-800);
        padding-right: 6rem;

        h2{
                font-size: 1.8rem;
                font-weight:400;
        }

        p{
                color: var(--gray-100);
        }
`;

export const Imgworks = styled.div`
        width:24rem;
        height:24rem;
        

        img{
                width:100%;
                height:100%;
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
                }
        }
`;