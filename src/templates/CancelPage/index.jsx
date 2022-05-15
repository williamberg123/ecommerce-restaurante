import React, { useEffect } from 'react';
import { FaWindowClose } from 'react-icons/fa';

import './style.css';

export default function CancelPurchasePage() {
	useEffect(() => {
		setTimeout(() => {
			window.location.href = '/ecommerce-restaurante/';
		}, 2000);
	}, []);

	return (
		<div className="CancelPage">
			<div className="cancel-div">
				<FaWindowClose /> COMPRA CANCELADA
			</div>
		</div>
	);
}
