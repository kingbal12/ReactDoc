import i18next from 'i18next';
import React from 'react';
import { Redirect } from 'react-router-dom';
import ar from './i18n/ar';
import en from './i18n/en';
import tr from './i18n/tr';

i18next.addResourceBundle('en', 'PastCunsultingApp', en);
i18next.addResourceBundle('tr', 'PastCunsultingApp', tr);
i18next.addResourceBundle('ar', 'PastCunsultingApp', ar);

const MailAppConfig = {
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
			path: [
				'/apps/mail/label/:labelHandle/:mailId?',
				'/apps/mail/filter/:filterHandle/:mailId?',
				'/apps/mail/:folderHandle/:mailId?'
			],
			component: React.lazy(() => import('./PastCunsultingApp'))
		},
		{
			path: '/apps/PastConsultingList',
			component: () => <Redirect to="/apps/PastConsultingList" />
		}
	]
};

export default MailAppConfig;
