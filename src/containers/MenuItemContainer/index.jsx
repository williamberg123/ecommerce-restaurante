import PropTypes from 'prop-types';

export default function MenuItemContainer({ children }) {
	return (
		<div className="MenuItemContainer">
			{children}
		</div>
	);
}

MenuItemContainer.propTypes = {
	children: PropTypes.node.isRequired
};
