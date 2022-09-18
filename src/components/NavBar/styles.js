import styled from 'styled-components';

export const Nav = styled.nav`
	z-index: 2;

	& ul {
		list-style: none;
		display: flex;
	}

	& a {
		position: relative;
		color: white;
		margin: 0 10px;
		padding: 10px 20px;
		font-weight: bold;
		border-radius: 5px 5px 0 0;
		transition: 0.4s;
	}

	& a:hover {
		background-color: white;
		color: rgb(255, 123, 0);
		border-radius: 5px;
	}

	.orders-counter {
		position: absolute;
		top: -10px;
		right: -10px;
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background-color: orange;
		font-size: 0.7rem;
	}

	@media (max-width: 600px) {
		z-index: 4;

		& ul {
			display: none;
			width: 100%;
			height: 100%;
			flex-direction: column;
			justify-content: flex-start;
			position: absolute;
			top: 0;
			left: 0;
			background-color: rgba(0, 0, 0, 0.5);
		}

		& li {
			margin: 25px auto;
		}
	}

	@media (max-width: 500px){
		.orders-counter {
			width: 20px;
			height: 20px;
			font-size: 0.5rem;
			top: -5px;
			right: -10px;
		}
	}
`;
