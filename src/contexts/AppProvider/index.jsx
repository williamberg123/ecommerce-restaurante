import { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from './context';

export default function AppProvider({ children }) {
	const [actuallyPage, setActuallyPage] = useState('home');
	const [ordersCounter, setOrdersCounter] = useState(0);
	const [isClosedAccount, setIsClosedAccount] = useState(false);

	const funcSetActuallyPage = useCallback((page) => {
		setActuallyPage(page);
		if (page === 'order') {
			setOrdersCounter(0);
		}
	}, []);

	const toConfirmPurchase = () => {
		setActuallyPage('confirm');
	};

	const memoizedContext = useMemo(
		() => (
			{
				actuallyPage, funcSetActuallyPage, ordersCounter, isClosedAccount,
				toConfirmPurchase, setOrdersCounter, setIsClosedAccount,
			}
		),
		[
			actuallyPage, ordersCounter, isClosedAccount
		]
	);

	return (
		<AppContext.Provider value={memoizedContext}>
			{children}
		</AppContext.Provider>
	);
}

AppProvider.propTypes = {
	children: PropTypes.node.isRequired
};
