import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	position: relative;
	font-family: 'Poppins', sans-serif;
	text-align: center;
`;

export const OrderItemsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	grid-gap: 20px;
	padding: 20px;

	& a {
		z-index: 2;
	}

	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media (max-width: 500px) {
		padding: 10px;
	}
`;

export const AccountDiv = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 4;
	padding: 20px;

	& p {
		z-index: 3;
		font-weight: bold;
		color: orange;
	}

	& a {
		font-size: 0.8rem;
		font-weight: bold;
		padding: 15px 30px;
		border: none;
		border-radius: 2px;
		z-index: 5;
		margin-left: 20px;
		color: white;
		cursor: pointer;
		transition: 0.2s;
	}

	& a:hover {
		transform: scale(1.02);
	}

	& a.confirm-purchase {
		background-color: rgb(0, 172, 0);
	}

	@media (max-width: 520px) {
		flex-direction: column;
		padding: 20px;

		& a {
			width: 100%;
			padding: 12px 20px;
			margin: 10px;
		}
	}
`;

export const CancelPurchaseButton = styled.button`
	font-size: 0.8rem;
	font-weight: bold;
	padding: 15px 30px;
	border: none;
	border-radius: 2px;
	z-index: 5;
	margin-left: 20px;
	color: white;
	cursor: pointer;
	transition: 0.2s;
	background-color: rgba(255, 255, 255, 0.164);

	&:hover {
		background-color: red;
	}

	@media (max-width: 520px) {
		width: 100%;
		padding: 12px 20px;
		margin: 10px;
	}
`;
