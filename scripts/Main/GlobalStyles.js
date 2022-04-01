import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html, body, #root {
        min-height: 100vh;
        max-width: 100vw;
        overflow-x: hidden;
    }
    *, button, input{
        border: 0;
        outline: 0;
        font-family: 'Inter', sans-serif;
        color: #fff;
    }
    /*
    a{
        display: flex;
        width: 95%;
        text-decoration: none;
        margin-bottom: 1rem;

        padding: 1rem;
        background-color: var(--primary-background);
        border-radius: 2rem;

        font-weight: bold;
        font-size: 1rem;

        &:hover{
            background-color: var(--secondary-background);
        }
    }*/

    :root {
        --primary: #36393f;
        --secondary: #2f3136;
        --tertiary: rgb(32,34,37);
        --quaternary: #292b2f;
        --quinary: #393d42;

        --secondary-font-color: #89B8ED;
        

        --primary-background: #12151A;
        --secondary-background: #292D39;

        --border: rgb(255,255,255,0.1);
     
        --white: #fff;
    }
`;
