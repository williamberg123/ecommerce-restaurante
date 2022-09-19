import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppContext } from '../../contexts/AppProvider/context';
import { Nav } from './styles';

export default function MobileNavBar({ isFirstRender, isOpen, toggleMobileMenu }) {
	const { actuallyPage, ordersCounter } = useContext(AppContext);

	return (
		<Nav isFirstRender={isFirstRender} isOpen={isOpen}>
			<ul>
				<li>
					<NavLink
						onClick={toggleMobileMenu}
						className={`${actuallyPage === 'home' ? 'actually-page' : ''}`}
						to="/ecommerce-restaurante/"
					>
						HOME
					</NavLink>
				</li>

				<li>
					<NavLink
						onClick={toggleMobileMenu}
						className={`${actuallyPage === 'menu' ? 'actually-page' : ''}`}
						to="/ecommerce-restaurante/cardapio"
					>
						CARDÁPIO
					</NavLink>
				</li>

				<li>
					<NavLink
						onClick={toggleMobileMenu}
						className={`${actuallyPage === 'order' ? 'actually-page' : ''}`}
						to="/ecommerce-restaurante/pedidos"
					>
						SEUS PEDIDOS
						{
							!!ordersCounter && (
								<div className="orders-counter">
									{
										`+${ordersCounter}`
									}
								</div>
							)
						}
					</NavLink>
				</li>
			</ul>
		</Nav>
	);
}

MobileNavBar.propTypes = {
	isFirstRender: PropTypes.bool.isRequired,
	isOpen: PropTypes.bool.isRequired,
	toggleMobileMenu: PropTypes.func.isRequired,
};
