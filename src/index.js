import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './contexts/AppProvider';
import App from './templates/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<AppProvider>
			<App />
		</AppProvider>
	</BrowserRouter>
);
