import React from 'react';

import PropTypes from 'prop-types';

import Header from '../../components/Header';
import ShadowEffect from '../../components/ShadowEffect';
import MenuContainer from '../../containers/MenuContainer';

import './style.css';

export default function MenuPage({ actuallyLink, funcSetActuallyLink, allMenuData }) {
	console.log(allMenuData);
	return (
		<div className="MenuPage">
			<ShadowEffect />
			<Header actuallyLink={actuallyLink} funcSetActuallyLink={funcSetActuallyLink} />
			<MenuContainer allMenuData={allMenuData} />
		</div>
	);
}

MenuPage.propTypes = {
	actuallyLink: PropTypes.string.isRequired,
	funcSetActuallyLink: PropTypes.func.isRequired,
	allMenuData: PropTypes.instanceOf(Array).isRequired
};
