import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import RenderIf from '../RenderIf';

import AppContext from '../../contexts/AppProvider/context';
import MenuContext from '../../contexts/MenuProvider/context';
import OrdersContext from '../../contexts/OrdersProvider/context';

import { toCloseMenu } from '../../contexts/MenuProvider/actions';
import { toCloseOrder } from '../../contexts/OrdersProvider/actions';

import './style.css';

export default function HeadingContainer({ title, accountValue = 0 }) {
	const { actuallyPage, setIsClosedAccount, funcSetActuallyPage } = useContext(AppContext);
	const { orders, ordersDispatch } = useContext(OrdersContext);
	const { menuDispatch } = useContext(MenuContext);

	const toCloseAccount = (e) => {
		if (!orders.length) {
			e.preventDefault();
			alert('Você não adicionou nenhum pedido');
			return;
		}

		toCloseMenu(menuDispatch);
		toCloseOrder(ordersDispatch);

		setIsClosedAccount(true);
		funcSetActuallyPage('account');
	};

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
	accountValue: PropTypes.number
};
