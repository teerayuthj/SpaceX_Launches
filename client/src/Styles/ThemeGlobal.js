import styled, { createGlobalStyle } from "styled-components";

// Test font-family Next.js and gatsbyjs
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto');
    body {
        padding: 0;
        margin: 0;
        font-family: ${props => props.theme.fontFamily};
        background: #0c0c0c;
    }
`;
export const AppWarp = styled.div`
  margin: 0;
  color: ${props => props.theme.white};
`;

export const ThemeStyle = {
  white: "#FFFFFF",
  red: "#8B0000",
  dark: "#2C2F33",
  black: "#23272A",
  green: "#43b581",
  purple: "#6441a5"
};
