import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import Header from '../../components/Header';
import ShadowEffect from '../../components/ShadowEffect';
import MenuContainer from '../../containers/MenuContainer';

import './style.css';

export default function MenuPage({ actuallyPage, funcSetActuallyPage, allMenuData, funcOrder }) {
	const [ allMenu, setAllMenu ] = useState([]);

	useEffect(() => {
		setAllMenu(allMenuData);
	}, [allMenuData]);

	return (
		<div className="MenuPage">
			<ShadowEffect />
			<Header
				actuallyPage={actuallyPage}
				funcSetActuallyPage={funcSetActuallyPage}
			/>
			<MenuContainer
				allMenuData={allMenu}
				funcOrder={funcOrder}
				title="cardápio disponível"
				whichIconMustHave="check"
			/>
		</div>
	);
}

MenuPage.propTypes = {
	actuallyPage: PropTypes.string.isRequired,
	funcSetActuallyPage: PropTypes.func.isRequired,
	allMenuData: PropTypes.instanceOf(Array).isRequired,
	funcOrder: PropTypes.func.isRequired
};
