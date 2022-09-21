import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;

	${({ isMobile }) => isMobile && css`
		padding-top: 90px;
	`}

	& h1 {
		width: 100%;
		display: block;
		text-align: left;
		font-variant: small-caps;
		color: red;
		z-index: 3;
		margin-right: auto;
		background-color: rgba(0, 0, 0, 0.7);
		padding: 20px;
		border-radius: 5px;
	}

	.account-div {
		${({ isMobile }) => isMobile && css`
			width: 100%;
		`}

		color: white;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 3;
		padding: 10px 0;
	}

	& .account-div a {
		background-color: green;
		color: white;
		font-size: 0.8rem;
		font-weight: bold;
		padding: 10px 20px;
		border: none;
		border-radius: 3px;
		cursor: pointer;
		margin-left: 20px;
	}

	& .account-div a:hover {
		transform: scale(1.02);
	}

	@media (max-width: 400px) {
		padding: 10px;

		${({ isMobile }) => isMobile && css`
			padding-top: 90px;
		`}

		& h1 {
			font-size: 1.6rem;
		}
	}
`;
