import { useContext } from 'react';
import ConfirmPurchaseButton from '../../components/ConfirmPurchaseButton';

import { AppContext } from '../../contexts/AppProvider/context';
import OrdersContext from '../../contexts/OrdersProvider/context';

import calcSum from '../../utils/calculateAccount';

import { AccountDiv, Container, CancelPurchaseButton } from './styles';

export default function AccountPage() {
	const { toConfirmPurchase, setIsClosedAccount } = useContext(AppContext);
	const { orders } = useContext(OrdersContext);

	const accountValue = calcSum(orders);

	const toCancelPurchase = () => {
		setIsClosedAccount(false);
	};

	return (
		<Container>
			<AccountDiv>
				<p>Total: R$ {accountValue.toFixed(2)}</p>
				<ConfirmPurchaseButton buttonClass="confirm-purchase" func={toConfirmPurchase}>
					CONFIRMAR COMPRA
				</ConfirmPurchaseButton>

				<CancelPurchaseButton onClick={toCancelPurchase}>
					CANCELAR
				</CancelPurchaseButton>
			</AccountDiv>
		</Container>
	);
}
