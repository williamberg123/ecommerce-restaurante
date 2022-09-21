import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	& input[type=number]::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	& input[type=number] {
		width: 25px;
		-moz-appearance: textfield;
		appearance: textfield;
		display: flex;
		align-items: center;
		text-align: center;
	}

	span.item-value {
		color: rgb(15, 201, 15);
		font-weight: bold;
		font-size: 1rem;
	}

	p.item-price span {
		margin-left: 3px;
	}

	@media (max-width: 600px) {
		& img {
			width: 50%;
		}

		.MenuItem-text {
			text-align: left;
		}
	}
`;

export const MenuItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	border-radius: 10px;
	color: black;
	font-family: 'Roboto', sans-serif;
	text-align: left;
	z-index: 2;

	& a {
		color: black;
	}

	& img {
		border-radius: 10px;
		width: 100%;
	}

	& h2 {
		margin: 10px;
		font-variant: small-caps;
		font-weight: bolder;
	}

	& p {
		margin: 10px;
		font-size: 0.9rem;
		color: #111;
	}

	@media (max-width: 600px) {
		display: flex;

		& img {
			width: 50%;
		}

		& .MenuItemInfo {
			display: flex;
		}
	}
`;

export const MenuItemConfig = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 10px;

	& button {
		width: 25px;
		height: 25px;
		color: red;
	}

	& button:disabled {
		cursor: not-allowed;
	}
`;
