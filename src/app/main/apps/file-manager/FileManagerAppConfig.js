import React from 'react';

const FileManagerAppConfig = {
	settings: {
		layout: {
			config: {
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	routes: [
		{
			path: '/apps/file-manager',
			component: React.lazy(() => import('./FileManagerApp'))
		}
	]
};

export default FileManagerAppConfig;
