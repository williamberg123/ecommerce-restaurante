import React, { useContext } from 'react';
import { CgMenuRound } from 'react-icons/cg';
import { AppContext } from '../../contexts/AppProvider/context';
import useMediaQuery from '../../hooks/useMediaQuery';
import NavBar from '../NavBar';
import RenderIf from '../RenderIf';
import { HeaderContainer } from './styles';

export default function Header() {
	const { toggleNavBar } = useContext(AppContext);
	const isMobile = useMediaQuery('(max-width: 600px)');

	return (
		<HeaderContainer>
			<NavBar />

			<RenderIf condition={isMobile}>
				<CgMenuRound onClick={toggleNavBar} />
			</RenderIf>
		</HeaderContainer>
	);
}
