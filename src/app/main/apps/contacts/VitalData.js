import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import ContactDialog from './ContactDialog';
import ContactsHeader from './ContactsHeader';
import ContactsList from './ContactsList';
import reducer from './store';
import { getContacts } from './store/contactsSlice';
import { getUserData } from './store/userSlice';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Clock from 'react-live-clock';
import Typography from '@material-ui/core/Typography';

function VitalData(props) {
	const dispatch = useDispatch();

	const pageLayout = useRef(null);
	const routeParams = useParams();

	useDeepCompareEffect(() => {
		dispatch(getContacts(routeParams));
		dispatch(getUserData());
	}, [dispatch, routeParams]);

	return (
		<>
			<FusePageSimple
				classes={{
					contentWrapper: 'p-0 sm:p-24 h-full',
					content: 'flex flex-col h-full',
					leftSidebar: 'w-256 border-0',
					header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
					wrapper: 'min-h-0'
				}}
				header={<div className="flex flex-col justify-between flex-1 px-24 pt-24">
                            <div className="flex justify-between items-start">
                                <Breadcrumbs separator={<NavigateNextIcon  fontSize="small" />}  className="text-16 md:text-16" variant="h5">
                                    <Link color="inherit" href="/apps/dashboards/project" onClick={handleClick} className={classes.link}>
                                        <HomeIcon className={classes.icon} />
                                    </Link>
                                    <Link color="inherit" href="/apps/contacts/all" onClick={handleClick}>
                                        Patient Vital Data
                                    </Link>
                                </Breadcrumbs>

                                <Typography className="text-24 md:text-24" variant="h4">
                                    <Clock format={'MM/DD/YYYY HH:mm:ss'} ticking={true} timezone={'asia/seoul'}/>
                                </Typography>
                            </div>
                            <div className="flex justify-between items-start">
                                <Typography className="py-0 sm:py-24 text-24 md:text-32" variant="h5">
                                    Patient Vital Data
                                </Typography>
                            </div>
                        </div>}
				content={<ContactsList />}
				sidebarInner
				ref={pageLayout}
				innerScroll
			/>
			<ContactDialog />
		</>
	);
}

export default withReducer('vitaldata', reducer)(VitalData);