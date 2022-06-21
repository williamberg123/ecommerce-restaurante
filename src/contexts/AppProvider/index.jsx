import PropTypes from 'prop-types';
import { useCallback, useMemo, useRef, useState } from 'react';

import AppContext from './context';

export default function AppProvider({ children }) {
	const [ actuallyPage, setActuallyPage ] = useState('home');
	const [ ordersCounter, setOrdersCounter ] = useState(0);
	const [ isClosedAccount, setIsClosedAccount ] = useState(false);

	const ulRef = useRef(null);

	const screenWidth = window.screen.width;

	const toggleNavBar = useCallback(() => {
		if (ulRef.current.style.display === 'none') {
			ulRef.current.style.display = 'flex';
			return;
		}
		ulRef.current.style.display = 'none';
	}, []);

	const closeMenu = useCallback(() => {
		if (screenWidth <= 600) ulRef.current.style.display = 'none';
	}, [screenWidth]);

	const funcSetActuallyPage = useCallback((page) => {
		console.log(page);
		setActuallyPage(page);
		closeMenu();
		if (page === 'order') {
			setOrdersCounter(0);
		}
	}, []);

	const toConfirmPurchase = () => {
		setActuallyPage('confirm');
	};

	const toCancelPurchase = () => {
		setActuallyPage('cancel');
	};

	const memoizedContext = useMemo(
		() => (
			{
				actuallyPage, funcSetActuallyPage, ordersCounter, isClosedAccount,
				toConfirmPurchase, toCancelPurchase, setOrdersCounter, setIsClosedAccount,
				toggleNavBar, ulRef
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
