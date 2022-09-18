import styled from 'styled-components';
import backgroundImage from '../../assets/imagem-do-site.jpg';

export const Container = styled.div`
	max-width: 1500px;
	min-height: 100vh;
	margin: 0 auto;
	position: relative;
	background: url(${backgroundImage}) center fixed;
	background-size: cover;
`;
