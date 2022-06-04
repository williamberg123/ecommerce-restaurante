import { useEffect, useMemo, useReducer, useState } from 'react';
import PropTypes from 'prop-types';

import MenuContext from './context';
import reducer from './reducer';
import { loadMenu } from './actions';

import data from './data';

export default function MenuProvider({ children }) {
	const [ menu, menuDispatch ] = useReducer(reducer, data);
	const [ baseUrl ] = useState('https://foodbukka.herokuapp.com/api/v1/menu');

	useEffect(() => {
		loadMenu(menuDispatch, baseUrl);
	}, []);

	const memoizedContext = useMemo(() => ({ menu, menuDispatch }), [ menu ]);

	return (
		<MenuContext.Provider value={memoizedContext}>
			{ children }
		</MenuContext.Provider>
	);
}

MenuProvider.propTypes = {
	children: PropTypes.node.isRequired
};
