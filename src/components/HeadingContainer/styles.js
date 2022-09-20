import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.7);
	position: sticky;
	top: 0;
	padding: 20px;
	z-index: 3;

	& h1 {
		display: block;
		text-align: left;
		font-variant: small-caps;
		color: red;
		z-index: 3;
		margin-right: auto;
	}

	.account-div {
		color: white;
		display: flex;
		align-items: center;
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

	@media (max-width: 500px) {
		& .account-div {
			font-size: 0.8rem;
		}

		& .account-div a {
			font-size: 0.6rem;
			padding: 8px 12px;
			margin-left: 10px;
		}
	}

	@media (max-width: 400px) {
		padding: 10px;

		& h1 {
			font-size: 1.6rem;
		}
	}
`;
