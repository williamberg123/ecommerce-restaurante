import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	text-align: center;
`;

export const Title = styled.div`
	display: flex;
	flex-direction: column;

	& h1 {
		font-size: 3.5rem;
		color: rgb(255, 0, 0);
		margin-top: 150px;
		z-index: 2;
	}

	& h2 {
		color: white;
		z-index: 2;
	}
`;
