import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PropTypes from 'prop-types';

import Home from './templates/Home';
import Conta from './templates/AccountPage';

export default function AppRoutes({ allMenuData }) {
	return (
		<Routes>
			<Route path="/" element={ <Home allMenuData={ allMenuData } /> } />
			<Route path="/conta" element={ <Conta /> } />
		</Routes>
	);
}

AppRoutes.propTypes = {
	allMenuData: PropTypes.instanceOf(Array).isRequired
};
