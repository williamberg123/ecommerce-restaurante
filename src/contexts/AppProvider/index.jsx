import PropTypes from 'prop-types';

import Context from './context';

export default function AppProvider({ children, value }) {
	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	);
}

AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
	value: PropTypes.instanceOf(Object).isRequired
};
