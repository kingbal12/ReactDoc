import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { setContactsSearchText } from './store/contactsSlice';
import Clock from 'react-live-clock';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { makeStyles } from '@material-ui/core/styles';

function handleClick(event) {
	// event.preventDefault();
	console.info('You clicked a breadcrumb.');
  }

const useStyles = makeStyles((theme) => ({
root: {
	'& > * + *': {
	marginTop: theme.spacing(2),
	},
},
}));

function ContactsHeader(props) {
	const dispatch = useDispatch();
	const searchText = useSelector(({ contactsApp }) => contactsApp.contacts.searchText);
	const mainTheme = useSelector(selectMainTheme);
	const classes = useStyles();
	
	return (	
			<div className="flex flex-col justify-between flex-1 px-24 pt-24">
				<div className="flex justify-between items-start">
					<Breadcrumbs separator={<NavigateNextIcon  fontSize="small" />}  className="text-16 md:text-16" variant="h5">
						<Link color="inherit" href="/apps/dashboards/project" onClick={handleClick} className={classes.link}>
							<HomeIcon className={classes.icon} />
						</Link>
						<Link color="inherit" href="/apps/schedule/all" onClick={handleClick}>
							Schedule
						</Link>
					</Breadcrumbs>

					<Typography className="text-24 md:text-24" variant="h4">
						<Clock format={'MM/DD/YYYY HH:mm:ss'} ticking={true} timezone={'asia/seoul'}/>
					</Typography>
				</div>
				<div className="flex justify-between items-start">
					<Typography className="py-0 sm:py-24 text-24 md:text-32" variant="h5">
						Schedule
					</Typography>

					<ThemeProvider theme={mainTheme}>
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Paper
							className="flex p-4 items-center w-full max-w-512 h-48 px-8 py-4 mt-24 rounded-8"
							elevation={1}
						>
							<Icon color="action">search</Icon>

							<Input
								placeholder="Search for anything"
								className="flex flex-1 px-16"
								disableUnderline
								fullWidth
								value={searchText}
								inputProps={{
									'aria-label': 'Search'
								}}
								onChange={ev => dispatch(setContactsSearchText(ev))}
							/>
						</Paper>
					</FuseAnimate>
				</ThemeProvider>
				</div>
			</div>	
	);
}

export default ContactsHeader;
