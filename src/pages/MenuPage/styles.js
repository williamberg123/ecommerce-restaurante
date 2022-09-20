import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	font-family: 'Poppins', sans-serif;
	text-align: center;
	padding-top: 90px;

	& .sl-spinner3 {
		z-index: 2;
	}
`;

export const MenuItemsContainer = styled.div`
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
