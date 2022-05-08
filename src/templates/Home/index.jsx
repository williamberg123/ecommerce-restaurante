import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import ShadowEffect from '../../components/ShadowEffect';
import Title from '../../components/Title';

import './style.css';

export default function Home({ actuallyLink, funcSetActuallyLink }) {
	// const htmlGenerating = allMenuData.map((item) => <p>{item.menuname}</p>);

	return (
		<div className="Home">
			<ShadowEffect />
			<Header actuallyLink={actuallyLink} funcSetActuallyLink={funcSetActuallyLink} />
			<Title />
		</div>
	);
}

Home.propTypes = {
	actuallyLink: PropTypes.string.isRequired,
	funcSetActuallyLink: PropTypes.func.isRequired
};
