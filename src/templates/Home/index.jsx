import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import ShadowEffect from '../../components/ShadowEffect';
import Title from '../../components/Title';

import './style.css';

export default function Home({ actuallyPage, funcSetActuallyPage }) {
	return (
		<div className="Home">
			<ShadowEffect />
			<Header actuallyPage={actuallyPage} funcSetActuallyPage={funcSetActuallyPage} />
			<Title />
		</div>
	);
}

Home.propTypes = {
	actuallyPage: PropTypes.string.isRequired,
	funcSetActuallyPage: PropTypes.func.isRequired
};
