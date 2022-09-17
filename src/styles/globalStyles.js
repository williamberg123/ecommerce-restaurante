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

	.actually-page {
		border-bottom: 3px solid rgb(255, 136, 0);
	}
`;
