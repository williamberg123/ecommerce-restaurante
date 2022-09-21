import { useDispatch, useSelector } from 'react-redux';
import ConfirmPurchaseButton from '../../components/ConfirmPurchaseButton';

import { setIsClosedAccount } from '../../store/reducers/accountStateSlice';
import { setActuallyPage } from '../../store/reducers/actuallyPageSlice';

import calcSum from '../../utils/calculateAccount';

import { AccountDiv, Container, CancelPurchaseButton } from './styles';

export default function AccountPage() {
	const orders = useSelector((state) => state.orders);
	const dispatch = useDispatch();

	const accountValue = calcSum(orders);

	const toCancelPurchase = () => {
		dispatch(setIsClosedAccount(false));
	};

	const toConfirmPurchase = () => {
		dispatch(setActuallyPage('confirm'));
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
