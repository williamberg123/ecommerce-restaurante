import React, { useEffect } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { CancelDiv, Container } from './styles';

export default function CancelPurchasePage() {
	useEffect(() => {
		setTimeout(() => {
			window.location.assign('/ecommerce-restaurante/');
		}, 2000);
	}, []);

	return (
		<Container>
			<CancelDiv>
				<FaWindowClose /> COMPRA CANCELADA
			</CancelDiv>
		</Container>
	);
}
