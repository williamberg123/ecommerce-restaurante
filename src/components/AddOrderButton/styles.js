import styled from 'styled-components';

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 1.1rem;
	font-variant: small-caps;
	font-weight: bold;
	border: none;
	border-radius: 5px;
	padding: 10px;
	margin: 3px;
	cursor: pointer;
	transition: 0.3s;
	font-family: 'Roboto Condensed', sans-serif;
	background-color: rgb(70, 194, 70);

	&:hover {
		background-color: rgb(102, 247, 145);
	}

	&:disabled {
		background-color: rgb(102, 247, 145);
		cursor: not-allowed;
	}
`;
