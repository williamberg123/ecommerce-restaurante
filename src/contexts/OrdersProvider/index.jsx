import { useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

import OrdersContext from './context';
import reducer from './reducer';
import data from './data';

export default function OrdersProvider({ children }) {
	const [ orders, ordersDispatch ] = useReducer(reducer, data);

	const memoizedContext = useMemo(() => ({ orders, ordersDispatch }), [ orders, ordersDispatch ]);

	return (
		<OrdersContext.Provider value={memoizedContext}>
			{ children }
		</OrdersContext.Provider>
	);
}
OrdersProvider.propTypes = {
	children: PropTypes.node.isRequired
};
