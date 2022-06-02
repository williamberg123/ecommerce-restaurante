import { createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export default function AppContext({ children, value }) {
	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	);
}

AppContext.propTypes = {
	children: PropTypes.node.isRequired,
	value: PropTypes.instanceOf(Object).isRequired
};
