import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import calcSum from '../../utils/calculateAccount';
import { Container } from './styles';
import useMediaQuery from '../../hooks/useMediaQuery';
import { setIsClosedAccount } from '../../state/reducers/accountStateSlice';

export default function HeadingContainer({ title }) {
	const [value, setValue] = useState(0);
	const { isClosedAccount } = useSelector((state) => state);
	const dispatch = useDispatch();

	const { orders } = useSelector((state) => state);
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

		dispatch(setIsClosedAccount(true));
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
