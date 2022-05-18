const mustRenderHeader = (actuallyPage) => (actuallyPage !== 'error' && actuallyPage !== 'confirm' && actuallyPage !== 'cancel');

export default mustRenderHeader;
