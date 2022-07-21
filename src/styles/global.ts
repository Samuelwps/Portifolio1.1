import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --white: #FFFFFF;

        --gray-100: #a8a8b3;
        --gray-300: #949494;
        --gray-800: #29292e;
        --gray-850: #1f2729;
        --gray-900: #0d0d0d;
        
        --cyan-500: #61dafb;
        --yellow-500: #e9ab2f;
    }

    *{
        padding: 0;
        margin:0;
        box-sizing: border-box;
    }

    body{
        width:100%;
        height: 100vh;
        
        font-family: 'Jura', sans-serif;

        color:white;

        background:#0D0D0D;
    }


    @media screen and (max-width:1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media screen and (max-width:720px){
        html{
            font-size: 87.5%;
        }
    }

    @media screen and (max-width:625px){
        html{
            font-size: 78.5%;
        }
    }

    @media screen and (max-width:535px){
        html{
            font-size: 71.5%;
        }
    }

    @media screen and (max-width:488px){
        html{
            font-size: 64.5%;
        }
    }
`;