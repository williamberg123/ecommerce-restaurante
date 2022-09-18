import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CancelDiv = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	color: red;
	padding: 10px;
	border-radius: 10px;
	font-weight: bold;
	z-index: 3;

	& svg {
		width: 50px;
		height: 50px;
		margin-right: 20px;
		fill: red;
	}
`;
