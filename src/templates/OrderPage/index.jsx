import React, { useContext, useMemo } from 'react';

import MainContainer from '../../containers/MainContainer';
import HeadingContainer from '../../components/HeadingContainer';
import RenderIf from '../../components/RenderIf';
import OrderItems from '../../containers/MenuItems';

import Context from '../../contexts/AppProvider/context';
import ContainerContext from '../../contexts/MainContainerContext';

import './style.css';

export default function OrderPage() {
	const { actuallyPage, accountValue, orders } = useContext(Context);

	const type = 'remove';

	const memoizedMenuContainerContext = useMemo(() => ({ type }), []);

	return (
		<div className="OrderPage">
			<MainContainer>
				<HeadingContainer
					title="seus pedidos"
					actuallyPage={actuallyPage}
					accountValue={accountValue}
				/>
				<RenderIf condition={ orders.length }>
					<ContainerContext value={memoizedMenuContainerContext}>
						<OrderItems
							dataToBeShown={orders}
						/>
					</ContainerContext>
				</RenderIf>
				<RenderIf condition={ !orders.length }>
					<p>Nenhum pedido</p>
				</RenderIf>
			</MainContainer>
		</div>
	);
}
