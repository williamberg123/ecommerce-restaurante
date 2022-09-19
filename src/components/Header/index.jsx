import React, { useState, useCallback } from 'react';
import { CgMenuRound } from 'react-icons/cg';
import useMediaQuery from '../../hooks/useMediaQuery';
import MobileNavBar from '../MobileNavBar';
import NavBar from '../NavBar';
import RenderIf from '../RenderIf';
import { HeaderContainer } from './styles';

export default function Header() {
	const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
	const isMobile = useMediaQuery('(max-width: 600px)');

	const toggleMobileMenu = useCallback(() => {
		setIsMobileMenuOpen((s) => !s);
	}, []);

	return (
		<HeaderContainer>
			<RenderIf condition={!isMobile}>
				<NavBar />
			</RenderIf>

			<RenderIf condition={isMobile}>
				<CgMenuRound onClick={toggleMobileMenu} />
			</RenderIf>

			<MobileNavBar isOpen={ isMobile && isMobileMenuOpen } />
		</HeaderContainer>
	);
}
