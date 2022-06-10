import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import PropTypes from 'prop-types';

import MenuContext from './context';
import reducer from './reducer';

import buildActions from './buildActions';

export default function MenuProvider({ children }) {
	const [ menu, menuDispatch ] = useReducer(reducer, []);
	const [ baseUrl ] = useState('https://foodbukka.herokuapp.com/api/v1/menu');

	const menuActions = useCallback(buildActions(menuDispatch), []);

	useEffect(() => {
		menuActions.loadMenu(baseUrl);
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
