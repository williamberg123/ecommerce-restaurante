import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	& button {
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
	}

	& button.noWasOrder {
		background-color: rgb(70, 194, 70);
	}

	& button.noWasOrder:hover {
		background-color: rgb(102, 247, 145);
	}

	& button.wasOrder:disabled {
		background-color: rgb(102, 247, 145);
		cursor: not-allowed;
	}

	& button.deleteOrder {
		background-color: rgb(192, 36, 36);
	}

	& button.deleteOrder:disabled {
		background-color: rgb(206, 64, 64);
		cursor: not-allowed;
	}

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
