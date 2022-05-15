import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import RenderIf from '../RenderIf';

import AppContext from '../../AppContext';

import './style.css';

export default function HeadingContainer({ title, actuallyPage, accountValue }) {
	const { toCloseAccount } = useContext(AppContext);

	return (
		<div className="HeadingContainer">
			<h1>{title}</h1>
			<RenderIf condition={ actuallyPage === 'order' }>
				<div className="account-div">
					Total: R$
					{accountValue.toFixed(2)}
					<Link onClick={toCloseAccount} to="/ecommerce-restaurante/conta">FECHAR CONTA</Link>
				</div>
			</RenderIf>
		</div>
	);
}

HeadingContainer.propTypes = {
	title: PropTypes.string.isRequired,
	actuallyPage: PropTypes.string.isRequired,
	accountValue: PropTypes.number.isRequired
};
