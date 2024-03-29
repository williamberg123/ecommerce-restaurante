import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Poppins', sans-serif;
	}

	a {
		text-decoration: none;
	}
`;
