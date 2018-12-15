import styled, { createGlobalStyle } from "styled-components";

// Test font-family Next.js and gatsbyjs
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto');
    body {
        padding: 0;
        margin: 0;
        font-family: ${props => props.theme.fontFamily};
    }
`;
export const AppWarp = styled.div`
  text-align: center;
`;
