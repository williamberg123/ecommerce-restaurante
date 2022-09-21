import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Nav } from './styles';

export default function MobileNavBar({ isFirstRender, isOpen, toggleMobileMenu }) {
	const { page, ordersCounter } = useSelector((state) => state);

	return (
		<Nav isFirstRender={isFirstRender} isOpen={isOpen}>
			<ul>
				<li>
					<NavLink
						onClick={toggleMobileMenu}
						className={`${page === 'home' ? 'actually-page' : ''}`}
						to="/ecommerce-restaurante/"
					>
						HOME
					</NavLink>
				</li>

				<li>
					<NavLink
						onClick={toggleMobileMenu}
						className={`${page === 'menu' ? 'actually-page' : ''}`}
						to="/ecommerce-restaurante/cardapio"
					>
						CARDÁPIO
					</NavLink>
				</li>

				<li>
					<NavLink
						onClick={toggleMobileMenu}
						className={`${page === 'order' ? 'actually-page' : ''}`}
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
