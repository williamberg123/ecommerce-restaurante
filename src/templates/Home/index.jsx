import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Home({ allMenuData }) {
	const htmlGenerating = allMenuData.map((item) => <p>{item.menuname}</p>);

	return (
		<div className="Home">
			<header>
				<nav>
					<ul>
						<li><Link to="./pedidos">Fazer pedidos</Link></li>
						<li><Link to="./pedidos/lista">Seus pedidos</Link></li>
					</ul>
				</nav>
			</header>
			{htmlGenerating}
		</div>
	);
}

Home.propTypes = {
	allMenuData: PropTypes.instanceOf(Array).isRequired
};
