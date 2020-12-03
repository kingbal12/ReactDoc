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
			component: React.lazy(() => import('./ProjectDashboardApp'))
		}
	]
};

export default ProjectDashboardAppConfig;
