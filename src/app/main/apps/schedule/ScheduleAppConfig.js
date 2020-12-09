import React from 'react';
import { Redirect } from 'react-router-dom';

const ContactsAppConfig = {
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
			path: '/apps/schedule/:id',
			component: React.lazy(() => import('./ContactsApp'))
		},
		{
			path: '/apps/schedule',
			component: () => <Redirect to="/apps/schedule/all" />
		}
	]
};

export default ContactsAppConfig;
