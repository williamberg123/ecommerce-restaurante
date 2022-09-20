import { useCallback, useEffect, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

import MenuContext from './context';
import reducer from './reducer';

import buildActions from './buildActions';

export default function MenuProvider({ children }) {
	const [ menu, menuDispatch ] = useReducer(reducer, []);

	const menuActions = useCallback(buildActions(menuDispatch), []);

	useEffect(() => {
		menuActions.loadMenu();
	}, []);

	const memoizedContext = useMemo(() => ({ menu, menuActions }), [ menu ]);

	return (
		<MenuContext.Provider value={memoizedContext}>
			{ children }
		</MenuContext.Provider>
	);
}

MenuProvider.propTypes = {
	children: PropTypes.node.isRequired
};
