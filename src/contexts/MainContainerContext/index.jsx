import { createContext } from 'react';
import PropTypes from 'prop-types';

export const MainContainerContext = createContext();

export default function ContainerContext({ children, value }) {
	return (
		<MainContainerContext.Provider value={value}>
			{children}
		</MainContainerContext.Provider>
	);
}

ContainerContext.propTypes = {
	children: PropTypes.node.isRequired,
	value: PropTypes.instanceOf(Object).isRequired
};
