import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
    colors: {
        powderWhite: "#FFFDF9",
        persianGreen: "#06B49A",
        lightBlue: "#AFDBD2",
        onyx: "#36313D"
    },
    fonts: ['Lato', 'sans-serif'],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
};

const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Lato', sans-serif;
	}
`;

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
);

export default Theme;