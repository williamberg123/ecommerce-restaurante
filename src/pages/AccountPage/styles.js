import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	position: relative;
	font-family: 'Poppins', sans-serif;
	text-align: center;
`;

export const AccountDiv = styled.div`
	width: 100%;
	display: flex;
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

	& a.cancel-purchase {
		background-color: rgba(255, 255, 255, 0.164);
	}

	& a.cancel-purchase:hover {
		background-color: red;
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
