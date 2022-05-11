import React from 'react';

import Header from '../../components/Header';
import ShadowEffect from '../../components/ShadowEffect';
import Title from '../../components/Title';

import './style.css';

export default function Home() {
	return (
		<div className="Home">
			<ShadowEffect />
			<Header />
			<Title />
		</div>
	);
}
