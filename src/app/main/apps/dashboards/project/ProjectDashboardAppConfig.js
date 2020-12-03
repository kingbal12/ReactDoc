import React from 'react';

const ProjectDashboardAppConfig = {
	settings: {
		layout: {
			config: {
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
			path: '/apps/dashboards/project',
			// path: '/apps/home', 변경 잘 됨
			component: React.lazy(() => import('./ProjectDashboardApp'))
		}
	]
};

export default ProjectDashboardAppConfig;
