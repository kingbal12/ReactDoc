import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseUtils from '@fuse/utils';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactsMultiSelectMenu from './ContactsMultiSelectMenu';
import ContactsTable from './ContactsTable';
import { openEditContactDialog, removeContact, toggleStarredContact, selectContacts } from './store/contactsSlice';
import { useHistory } from "react-router-dom";

function ContactsList(props) {
	const history = useHistory();
	const dispatch = useDispatch();
	const contacts = useSelector(selectContacts);
	const searchText = useSelector(({ contactsApp }) => contactsApp.contacts.searchText);
	const user = useSelector(({ contactsApp }) => contactsApp.user);

	const [filteredData, setFilteredData] = useState(null);

	const columns = React.useMemo(
		() => [
			// {
			// 	Header: ({ selectedFlatRows }) => {
			// 		const selectedRowIds = selectedFlatRows.map(row => row.original.id);

			// 		return (
			// 			selectedFlatRows.length > 0 && <ContactsMultiSelectMenu selectedContactIds={selectedRowIds} />
			// 		);
			// 	},
			// 	accessor: 'avatar',
			// 	Cell: ({ row }) => {
			// 		return <Avatar className="mx-8" alt={row.original.name} src={row.original.avatar} />;
			// 	},
			// 	className: 'justify-center',
			// 	width: 64,
			// 	sortable: false
			// },
			{
				Header: '',
				accessor: 'status',
				sortable: true
			},
			{
				Header: 'Name',
				accessor: 'name',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Gender',
				accessor: 'gender',
				sortable: true
			},
			{
				Header: 'Date of Birth',
				accessor: 'birth',
				sortable: true
			},
			{
				Header: 'Diagnosis',
				accessor: 'diagnosis',
				sortable: true
			},
			{
				Header: 'Vital Data',
				id: 'VD',
				width: 128,
				sortable: false,
				Cell: ({ row }) => (
					<div className="flex items-center">
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch((ev) => history.push("/apps/e-commerce/products"));
							}}
							// onClick={() => history.push("/apps/e-commerce/orders")}
						>
							<Icon>assessment</Icon>
						</IconButton>
					</div>
				)
			},
			{
				Header: 'Consult List',
				id: 'CL',
				width: 128,
				sortable: false,
				Cell: ({ row }) => (
					<div className="flex items-center">
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch((ev) => history.push("/apps/e-commerce/products"));
							}}
							// onClick={() => history.push("/apps/e-commerce/orders")}
						>
							<Icon>featured_play_list</Icon>
						</IconButton>
					</div>
				)
			},
			{	Header: 'Message',
				id: 'message',
				width: 128,
				sortable: false,
				Cell: ({ row }) => (
					<div className="flex items-center">
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch(toggleStarredContact(row.original.id));
							}}
							onClick={() => history.push("/apps/e-commerce/products")}
						>
							{user.starred && user.starred.includes(row.original.id) ? (
								<Icon>email</Icon>
							) : (
								<Icon>email_border</Icon>
							)}
						</IconButton>
					</div>
				)
			},
			{	Header: 'Overview',
				id: 'PO',
				width: 128,
				sortable: false,
				Cell: ({ row }) => (
					<div className="flex items-center">
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch((ev) => history.push("/apps/e-commerce/products"));
							}}
							// onClick={() => history.push("/apps/e-commerce/orders")}
						>
							<Icon>description</Icon>
						</IconButton>
					</div>
				)
			}
		],
		[dispatch, user.starred]
	);

	useEffect(() => {
		function getFilteredArray(entities, _searchText) {
			if (_searchText.length === 0) {
				return contacts;
			}
			return FuseUtils.filterArrayByString(contacts, _searchText);
		}

		if (contacts) {
			setFilteredData(getFilteredArray(contacts, searchText));
		}
	}, [contacts, searchText]);

	if (!filteredData) {
		return null;
	}

	if (filteredData.length === 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography color="textSecondary" variant="h5">
					There are no contacts!
				</Typography>
			</div>
		);
	}

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
			<ContactsTable
				columns={columns}
				data={filteredData}
				// onRowClick={(ev, row) => {
				// 	if (row) {
				// 		dispatch(openEditContactDialog(row.original));
				// 	}
				// }}
				onRowClick={(row) =>{if (row) {history.push("/apps/e-commerce/products")} }}
			/>
		</FuseAnimate>
	);
}

export default ContactsList;
