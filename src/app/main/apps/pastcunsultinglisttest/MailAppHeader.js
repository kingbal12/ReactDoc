import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import Clock from 'react-live-clock';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function handleClick(event) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
  }

const useStyles = makeStyles((theme) => ({
root: {
	'& > * + *': {
	marginTop: theme.spacing(2),
	},
},
}));

function MailAppHeader(props) {
	const dispatch = useDispatch();
	const searchText = useSelector(({ mailApp }) => mailApp.mails.searchText);
	const mainTheme = useSelector(selectMainTheme);
	const { t } = useTranslation('mailApp');
	const classes = useStyles();

	return (
			<div className="flex flex-col justify-between flex-1 px-24 pt-24">
				<div className="flex justify-between items-start">
					<Breadcrumbs separator={<NavigateNextIcon color="md-light" fontSize="small" />}  className="text-16 md:text-16" variant="h5">
						<Link color="inherit" href="/apps/dashboards/project" onClick={handleClick} className={classes.link}>
							<HomeIcon className={classes.icon} />
						</Link>
						<Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
							Notice
						</Link>
					</Breadcrumbs>

					<Typography className="text-24 md:text-24" variant="h4">
						<Clock format={'MM/DD/YYYY HH:mm:ss'} ticking={true} timezone={'asia/seoul'}/>
					</Typography>
				</div>
				<div className="flex justify-between items-start">
					<Typography className="py-0 sm:py-24 text-24 md:text-32" variant="h5">
						Notice
					</Typography>
				</div>
			</div>
	);
}

export default MailAppHeader;
