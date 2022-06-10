import { useCallback, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

import OrdersContext from './context';
import reducer from './reducer';
import buildActions from './buildActions';

export default function OrdersProvider({ children }) {
	const [ orders, ordersDispatch ] = useReducer(reducer, []);
	const orderActions = useCallback(buildActions(ordersDispatch), []);

	const memoizedContext = useMemo(() => ({ orders, orderActions }), [ orders ]);

	return (
		<OrdersContext.Provider value={memoizedContext}>
			{ children }
		</OrdersContext.Provider>
	);
}
OrdersProvider.propTypes = {
	children: PropTypes.node.isRequired
};
