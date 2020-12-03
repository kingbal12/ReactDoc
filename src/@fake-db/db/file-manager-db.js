import mock from '../mock';

const fileManagerDB = {
	files: [
		{
			id: '1',
			name: 'Jaine Jang',
			symptom: 'HTN',
			check: 'ROUTINE',
			size: '',
			modified: '09:30',
			opened: 'July 8, 2017',
			created: 'July 8, 2017',
			extention: '',
			location: 'My Files > Documents',
			offline: true
		},
		{
			id: '2',
			name: 'Robin Choi',
			symptom: 'Asthema',
			check: 'URGENT',
			size: '',
			modified: '10:30',
			opened: 'July 8, 2017',
			created: 'July 8, 2017',
			extention: '',
			location: 'My Files > Documents',
			offline: true
		}
	]
};

mock.onGet('/api/file-manager-app/files').reply(config => {
	return [200, fileManagerDB.files];
});
