import styled from "styled-components"


export const SectionWorks = styled.section`
        padding-top: 5rem;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
`; 

export const DivWorks = styled.div`
        display: flex;
        flex-direction:column;
        align-items: flex-start;

        p{
                color:var(--gray-300);
        }

`

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
        display:flex;;
        flex-direction: column;
        margin:3rem;
        justify-content: center;
        align-items:center;

        font-size:1.5rem;

        p{
                text-align: center;
                max-width:15rem;
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
                margin:0.5rem;
                height:3px;
        }

        h4{
                font-size:2rem;
        }
`;

export const Ullist = styled.ul`
        display:flex;
        max-width:10rem;

        list-style: none;

        padding-top:3rem;

        li{
                padding:0.5rem;
                background:var(--background);
                a{
                        width:20rem;
                        height:20rem;
                        
                        cursor:pointer;
                        margin:1rem;                

                        img{
                                width: 1.5rem;
                                height: 1.5rem;
                        }
                }
        }

        .second{
                transform: scaleX(-1);
        }
`


export const DivImage = styled.div`
        max-width:45rem;
        max-height:45rem;
        background:var(--background);

        img{
                width:100%;
                height:100%;
        }
        
`

export const ProjectHeader = styled.div`    
        display:flex;
        align-items: flex-start;
        flex-direction:column;
`;


export const ProjectContent = styled.div`
        padding-top:4rem;

        margin:1.5rem;

        display: flex;
        align-items:center;
        justify-content: center;
        flex-direction:column;
        
        h1{     
                width: 100%;
                text-align: left;
                font-size:1.5rem;
        }

        div{
        p{
                text-align: center;
                font-size:1.2rem;
        }}
`

export const DivImageSummary = styled.div`
        margin:3rem;
        max-width:65rem;
        max-height:65rem;

        img{
                width:100%;
                height:100%;
        }
`


export const DivSummaryCategory = styled.div`
        display: flex;
        flex-direction: column;
        max-width:70rem;
        max-height:70rem;
        margin:3rem;
`

export const DivSummaryCategoryDual = styled.div`
        display:flex;
        width:100%;
        height:100%;
        div{
                margin:1rem;
                display:flex;
                flex-direction: column;
                justify-content: space-around;
                p{
                text-align: left;}
        }
`

export const DivImageSummaryCategory = styled.div`

        max-width:35rem;
        max-height:35rem;

        img{
                width:100%;
                height:100%;
        }
`
