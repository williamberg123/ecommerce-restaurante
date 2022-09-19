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

	a.actually-page {
		color: rgb(255, 123, 0);
		border-radius: 5px;
		border: 1px solid rgb(255, 123, 0);
	}
`;
