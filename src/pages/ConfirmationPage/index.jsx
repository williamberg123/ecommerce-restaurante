import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import { ConfirmationDiv, Container } from './styles';

export default function ConfirmedPurchasePage() {
	useEffect(() => {
		setTimeout(() => {
			window.location.assign('/ecommerce-restaurante/');
		}, 2000);
	}, []);

	return (
		<Container>
			<ConfirmationDiv>
				<FaCheckCircle /> COMPRA CONFIRMADA <br />
			</ConfirmationDiv>
		</Container>
	);
}
