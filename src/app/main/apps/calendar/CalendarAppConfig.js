import React from 'react';

const CalendarAppConfig = {
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
			path: '/apps/calendar',
			component: React.lazy(() => import('./CalendarApp'))
		}
	]
};

export default CalendarAppConfig;
