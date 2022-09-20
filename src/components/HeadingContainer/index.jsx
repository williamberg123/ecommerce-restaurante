import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppContext } from '../../contexts/AppProvider/context';
import OrdersContext from '../../contexts/OrdersProvider/context';

import calcSum from '../../utils/calculateAccount';
import { Container } from './styles';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function HeadingContainer({ title }) {
	const [ value, setValue ] = useState(0);
	const { setIsClosedAccount, isClosedAccount } = useContext(AppContext);
	const { orders } = useContext(OrdersContext);
	const isMobile = useMediaQuery('(max-width: 600px)');

	useEffect(() => {
		const newValue = calcSum(orders);
		setValue(newValue);
	}, [orders]);

	const toCloseAccount = (e) => {
		if (!orders.length) {
			e.preventDefault();
			alert('Você não adicionou nenhum pedido');
			return;
		}

		setIsClosedAccount(true);
	};

	return (
		<Container isMobile={isMobile}>
			{
				!isMobile && <h1>{title}</h1>
			}

			<div className="account-div">
				Total: R$
				{value.toFixed(2)}
				<Link onClick={(e) => toCloseAccount(e)} to="/ecommerce-restaurante/pedidos/conta">
					{
						isClosedAccount
						? 'CONFERIR CONTA'
						: 'FECHAR CONTA'
					}
				</Link>
			</div>
		</Container>
	);
}

HeadingContainer.propTypes = {
	title: PropTypes.string.isRequired,
};
