import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppContext } from '../../contexts/AppProvider/context';
import MenuContext from '../../contexts/MenuProvider/context';
import OrdersContext from '../../contexts/OrdersProvider/context';

import RenderIf from '../RenderIf';

import './style.css';

export default function HeadingContainer({ title, accountValue = 0 }) {
	const { actuallyPage, setIsClosedAccount, funcSetActuallyPage } = useContext(AppContext);
	const { orders, orderActions } = useContext(OrdersContext);
	const { menuActions } = useContext(MenuContext);

	const toCloseAccount = (e) => {
		if (!orders.length) {
			e.preventDefault();
			alert('Você não adicionou nenhum pedido');
			return;
		}
		menuActions.toCloseMenu();
		orderActions.toCloseOrder();

		funcSetActuallyPage('account');
		setIsClosedAccount(true);
	};

	return (
		<div className="HeadingContainer">
			<h1>{title}</h1>
			<RenderIf condition={actuallyPage === 'order'}>
				<div className="account-div">
					Total: R$
					{accountValue.toFixed(2)}
					<Link onClick={(e) => toCloseAccount(e)} to="/ecommerce-restaurante/conta">FECHAR CONTA</Link>
				</div>
			</RenderIf>
		</div>
	);
}

HeadingContainer.propTypes = {
	title: PropTypes.string.isRequired,
	accountValue: PropTypes.number
};
