import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

import './style.css';

export default function CancelPurchasePage() {
	return (
		<div className="cancel-div">
			<FaWindowClose /> COMPRA CANCELADA
		</div>
	);
}
