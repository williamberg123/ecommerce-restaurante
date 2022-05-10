import React from 'react';

import PropTypes from 'prop-types';
import MenuItems from '../MenuItems';

import './style.css';

export default function MenuContainer({ allMenuData, funcOrder, title, whichIconMustHave }) {
	return (
		<div className="MenuContainer">
			<h1>{title}</h1>
			{
				!allMenuData.length
					? ''
					: (
						<MenuItems
							allMenuData={allMenuData}
							funcOrder={funcOrder}
							whichIconMustHave={whichIconMustHave}
						/>
					)
			}
		</div>
	);
}

MenuContainer.propTypes = {
	allMenuData: PropTypes.instanceOf(Array).isRequired,
	funcOrder: PropTypes.func,
	title: PropTypes.string.isRequired,
	whichIconMustHave: PropTypes.string.isRequired
};
