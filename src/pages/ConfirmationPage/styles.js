import styled from 'styled-components';
import backgroundImage from '../../assets/imagem-do-site.jpg';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: url(${backgroundImage}) center fixed;
	background-size: cover;
`;

export const ConfirmationDiv = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgb(255, 255, 255);
	color: green;
	padding: 10px;
	border-radius: 10px;
	font-weight: bolder;
	z-index: 3;

	& svg {
		width: 50px;
		height: 50px;
		margin-right: 20px;
		fill: green;
	}
`;
