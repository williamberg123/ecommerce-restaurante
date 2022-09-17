import React, { useContext } from 'react';
import { CgMenuRound } from 'react-icons/cg';
import { AppContext } from '../../contexts/AppProvider/context';
import useMediaQuery from '../../hooks/useMediaQuery';
import mustRenderHeader from '../../utils/mustRenderHeader';
import NavBar from '../NavBar';
import RenderIf from '../RenderIf';
import './style.css';

export default function Header() {
	const { actuallyPage, toggleNavBar } = useContext(AppContext);
	const isMobile = useMediaQuery('(max-width: 600px)');

	return (
		<header className="Header">
			<RenderIf condition={mustRenderHeader(actuallyPage)}>
				<NavBar />

				<RenderIf condition={isMobile}>
					<CgMenuRound onClick={toggleNavBar} />
				</RenderIf>
			</RenderIf>
		</header>
	);
}
