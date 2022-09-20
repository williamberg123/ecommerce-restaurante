import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
	position: relative;
	width: 1500px;
	font-family: 'Poppins', sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	background-color: transparent;
	width: 100%;
	height: fit-content;
	margin: 0 auto;
	padding: 20px;
	text-align: center;
	z-index: 4;

	${({ isMobile }) => isMobile && css`
		position: fixed;
		top: 0;
		background-color: rgba(0, 0, 0, 0.7);
	`}

	& svg {
		width: 50px;
		height: 50px;
		color: red;
		z-index: 3;
		margin-right: auto;
	}

	& a.actually-page {
		color: rgb(255, 123, 0);
		border-radius: 5px;
		border: 1px solid rgb(255, 123, 0);
	}
`;
