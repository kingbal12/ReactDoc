import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import _ from '@lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './store';
import { selectProjects, getProjects } from './store/projectsSlice';
import { getWidgets, selectWidgets } from './store/widgetsSlice';
import Clock from 'react-live-clock';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import Widget1 from './widgets/Widget1';
import Widget2 from './widgets/Widget2';
import Widget3 from './widgets/Widget3';
import Widget7 from './widgets/Widget7';

function handleClick(event) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
}

const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
	selectedProject: {
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		borderRadius: '8px 0 0 0'
	},
	projectMenuButton: {
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		borderRadius: '0 8px 0 0',
		marginLeft: 1
	}
}));

function ProjectDashboardApp(props) {
	const dispatch = useDispatch();
	const widgets = useSelector(selectWidgets);
	const projects = useSelector(selectProjects);

	const classes = useStyles(props);
	const pageLayout = useRef(null);
	const [tabValue, setTabValue] = useState(0);
	const [selectedProject, setSelectedProject] = useState({
		id: 1,
		menuEl: null
	});

	useEffect(() => {
		dispatch(getWidgets());
		dispatch(getProjects());
	}, [dispatch]);

	function handleChangeTab(event, value) {
		setTabValue(value);
	}

	function handleChangeProject(id) {
		setSelectedProject({
			id,
			menuEl: null
		});
	}

	function handleOpenProjectMenu(event) {
		setSelectedProject({
			id: selectedProject.id,
			menuEl: event.currentTarget
		});
	}

	function handleCloseProjectMenu() {
		setSelectedProject({
			id: selectedProject.id,
			menuEl: null
		});
	}
	// return null;
	if (_.isEmpty(widgets) || _.isEmpty(projects)) {
		return null;
	}


	return (
		<FusePageSimple
			classes={{
				header: 'min-h-160 h-160',
				toolbar: 'min-h-48 h-48',
				rightSidebar: 'w-288',
				content: classes.content
			}}
			header={
				<div className="flex flex-col justify-between flex-1 px-24 pt-24">
					<div className="flex justify-between items-start">
						<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" className="text-16 md:text-16" variant="h5">
							<Link color="inherit" href="/apps/dashboards/project" onClick={handleClick} className={classes.link}>
								<HomeIcon className={classes.icon} />
							</Link>
						</Breadcrumbs>

						<Typography className="text-24 md:text-24" variant="h4">
							<Clock format={'MM/DD/YYYY HH:mm:ss'} ticking={true} timezone={'asia/seoul'}/>
						</Typography>
					</div>
					<div className="flex justify-between items-start">
						<Typography className="py-0 sm:py-24 text-24 md:text-32" variant="h5">
							Welcome! John!
						</Typography>
					</div>
				</div>
			}
			
			content={
				<div className="p-12">
					{tabValue === 0 && (
						<FuseAnimateGroup
							className="flex flex-wrap"
							enter={{
								animation: 'transition.slideUpBigIn'
							}}
						>
							<div className="widget flex w-full sm:w-1/2 md:w-1/3 p-12">
								<Widget1 widget={widgets.widget1} />
							</div>
							<div className="widget flex w-full sm:w-1/2 md:w-1/3 p-12">
								<Widget2 widget={widgets.widget2} />
							</div>
							<div className="widget flex w-full sm:w-1/2 md:w-1/3 p-12">
								<Widget3 widget={widgets.widget3} />
							</div>
							{}
							<div className="widget flex w-full p-12">
								<Widget7 widget={widgets.widget7} />
							</div>
						</FuseAnimateGroup>
					)}
					{}
				</div>
			}
			ref={pageLayout}
		/>
	);
}

export default withReducer('projectDashboardApp', reducer)(ProjectDashboardApp);
