import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import './style.css';

export default function ConfirmedPurchasePage() {
	useEffect(() => {
		setTimeout(() => {
			window.location.href = '/ecommerce-restaurante/';
		}, 2000);
	}, []);

	return (
		<div className="ConfirmationPage">
			<div className="confirmation-div">
				<FaCheckCircle /> COMPRA CONFIRMADA <br />
			</div>
		</div>
	);
}
