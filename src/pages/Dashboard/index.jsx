import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Header from '../../components/Header';
import RenderIf from '../../components/RenderIf';
import ShadowEffect from '../../components/ShadowEffect';
import mustRenderHeader from '../../utils/mustRenderHeader';
import { Container } from './styles';

export default function Dashboard() {
	const actuallyPage = useSelector((state) => state.page);

	return (
		<Container>
			<RenderIf condition={mustRenderHeader(actuallyPage)}>
				<Header />
			</RenderIf>

			<Outlet />

			<RenderIf condition={actuallyPage !== 'error'}>
				<ShadowEffect />
			</RenderIf>
		</Container>
	);
}
