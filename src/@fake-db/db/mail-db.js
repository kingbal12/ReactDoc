import mock from '../mock';

const mailDB = {
	mails: [
		{
			id: '15459251a6d6b397565',
			date: '11.11.2020',
			title: '[긴급] 서비스 긴급 공지 합니다.',
			content: '11월 11일 서비스 테스트가 있을 예정입니다.',	
			folder: 0
		},
		{
			id: '154588a0864d2881124',
			date: '11.05.2020',
			title: '[긴급] 01 ~ 03 시 까지 정기 백업 진행 합니다.',
			content: '새벽 정기백업이 진행되므로 서비스 사용이 불가합니다.',
			folder: 0
		}
	],
	folders: [
		{
			id: 0,
			handle: 'inbox',
			title: 'Inbox',
			translate: 'INBOX',
			icon: 'inbox'
		}
	],
	filters: [
		{
			id: 0,
			handle: 'starred',
			title: 'Starred',
			translate: 'STARRED',
			icon: 'star'
		}
	],
	labels: [
		{
			id: 0,
			handle: 'note',
			title: 'Note',
			color: '#7CB342'
		}
	]
};











// mock.onGet('/api/mail-app/mail').reply(config => {
// 	const { params } = config;
// 	const response = mailDB.mails.find(mail => mail.id === params.mailId);
// 	return [200, response];
// });

mock.onGet('/api/mail-app/mails').reply(config => {
	const { params } = config;
	let response = [];

	if (params.labelHandle) {
		const labelId = mailDB.labels.find(label => label.handle === params.labelHandle).id;

		response = mailDB.mails.filter(mail => mail.labels.includes(labelId));
	} else if (params.filterHandle) {
		response = mailDB.mails.filter(mail => mail[params.filterHandle]);
	} // folderHandle
	else {
		let { folderHandle } = params;
		if (!folderHandle) {
			folderHandle = 'inbox';
		}
		const folderId = mailDB.folders.find(folder => folder.handle === folderHandle).id;
		response = mailDB.mails.filter(mail => mail.folder === folderId);
	}

	return [200, response];
});

// mock.onPost('/api/mail-app/update-mail').reply(request => {
// 	const mail = JSON.parse(request.data);
// 	mailDB.mails = mailDB.mails.map(_mail => {
// 		if (_mail.id === mail.id) {
// 			return mail;
// 		}
// 		return _mail;
// 	});

// 	return [200, mail];
// });
// mock.onGet('/api/mail-app/filters').reply(200, mailDB.filters);
// mock.onGet('/api/mail-app/labels').reply(200, mailDB.labels);
// mock.onGet('/api/mail-app/folders').reply(200, mailDB.folders);

// mock.onPost('/api/mail-app/set-folder').reply(request => {
// 	const data = JSON.parse(request.data);
// 	const { selectedMailIds, folderId } = data;
// 	mailDB.mails = mailDB.mails.map(_mail => {
// 		if (selectedMailIds.includes(_mail.id)) {
// 			return {
// 				..._mail,
// 				folder: folderId
// 			};
// 		}
// 		return _mail;
// 	});

// 	return [200];
// });

// mock.onPost('/api/mail-app/toggle-label').reply(request => {
// 	const data = JSON.parse(request.data);
// 	const { selectedMailIds, labelId } = data;
// 	mailDB.mails = mailDB.mails.map(_mail => {
// 		if (selectedMailIds.includes(_mail.id)) {
// 			return {
// 				..._mail,
// 				labels: _mail.labels.includes(labelId)
// 					? _mail.labels.filter(_id => _id !== labelId)
// 					: [..._mail.labels, labelId]
// 			};
// 		}
// 		return _mail;
// 	});

// 	return [200];
// });
// mock.onPost('/api/mail-app/delete-mails').reply(request => {
// 	const data = JSON.parse(request.data);
// 	const { selectedMailIds } = data;
// 	mailDB.mails = mailDB.mails.filter(_mail => (selectedMailIds.includes(_mail.id) ? false : _mail));
// 	return [200];
// });
