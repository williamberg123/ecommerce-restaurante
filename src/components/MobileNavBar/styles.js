import styled, { css } from 'styled-components';

export const Nav = styled.nav`
	position: absolute;
	z-index: 4;
	width: 100%;
	height: 100vh;
	top: 100%;
	right: 100%;
	display: none;

	${({ isOpen, isFirstRender }) => {
		return isOpen
		? css`
			display: block;
			animation: 0.5s emerge ease;
			right: 0;
		`
		: !isFirstRender && css`
			display: block;
			animation: 0.5s exit ease;
			right: 100%;
		`;
	}}

	& ul {
		list-style: none;
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		flex-direction: column;
		justify-content: flex-start;
		background-color: rgba(0, 0, 0, 1);
	}

	& li {
		margin: 25px auto;
	}

	& a {
		position: relative;
		color: white;
		margin: 0 10px;
		padding: 10px 20px;
		font-weight: bold;
		border-radius: 5px 5px 0 0;
		transition: 0.4s;
		border: 1px solid transparent;
	}

	& a:not(.actually-page):hover {
		color: rgb(255, 123, 0);
		border-radius: 5px;
		border: 1px solid rgb(255, 123, 0);
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


	@media (max-width: 500px){
		.orders-counter {
			width: 20px;
			height: 20px;
			font-size: 0.5rem;
			top: -5px;
			right: -10px;
		}
	}

	@keyframes emerge {
		0% {
			right: 100%;
		}

		100% {
			right: 0;
		}
	}

	@keyframes exit {
		0% {
			right: 0;
		}

		100% {
			right: 100%;
		}
	}
`;
