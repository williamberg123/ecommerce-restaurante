import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	text-align: center;

	& > span {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: white;
		z-index: 5;
		font-weight: bold;
		font-variant: small-caps;
		text-transform: uppercase;
		font-size: 1.2rem;
		margin-top: 70px;

		& svg {
			width: 150px;
			height: 150px;
			z-index: 3;
		}
	}
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
