import React from 'react';

const AnalyticsDashboardAppConfig = {
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
			path: '/apps/dashboards/analytics',
			component: React.lazy(() => import('./AnalyticsDashboardApp'))
		}
	]
};

export default AnalyticsDashboardAppConfig;
