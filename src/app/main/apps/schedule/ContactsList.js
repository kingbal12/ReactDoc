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
			{
				Header: '',
				accessor: 'status',
				sortable: true,
				width: 64,
				sortable: false
			},
			{
				Header: 'Time',
				accessor: 'date',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Name',
				accessor: 'name',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Diagnosis',
				accessor: 'diagnosis',
				sortable: true
			},
			{
				Header: 'Check',
				accessor: 'check',
				sortable: true
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
			{	Header: 'Consult',
				id: 'Consult',
				width: 128,
				sortable: false,
				Cell: ({ row }) => (
					<div className="flex items-center">
						<IconButton
							onClick={ev => {
								ev.stopPropagation();
								dispatch((ev) => history.push("/apps/e-commerce/orders"));
							}}
							// onClick={() => history.push("/apps/e-commerce/orders")}
						>
							<Icon>play_arrow</Icon>
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
