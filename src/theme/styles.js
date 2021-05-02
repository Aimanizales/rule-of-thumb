import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	body {
        // color: ${props => (props.whiteColor ? 'white' : 'black')};
		font-family: 'Lato', sans-serif;
	}
`;

const theme = {
    color: 'red',
	fonts: ["sans-serif", "Lato"],
};

export default theme;
export { GlobalStyle };