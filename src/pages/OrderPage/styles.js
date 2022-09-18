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
