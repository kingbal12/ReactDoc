import withReducer from 'app/store/withReducer';
import React, { useState, useEffect } from 'react';
import reducer from '../store';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Clock from 'react-live-clock';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';

function handleClick(event) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
  }

const useStyles = makeStyles(theme => ({
	layoutRoot: {}
}));

function Orders(props) {
	const classes = useStyles(props);
	const { t } = useTranslation('examplePage');
	var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
	});
	
	return (
		<FusePageSimple
		classes={{
			root: classes.layoutRoot
		}}
		header={
			<div className="flex flex-col justify-between flex-1 px-24 pt-24">
				<div className="flex justify-between items-start">
					<Breadcrumbs separator={<NavigateNextIcon color="md-light" fontSize="small" />}  className="text-16 md:text-16" variant="h5">
						<Link color="inherit" href="/apps/dashboards/project" onClick={handleClick} className={classes.link}>
							<HomeIcon className={classes.icon} />
						</Link>
						<Link color="inherit" href="/apps/e-commerce/orders" onClick={handleClick}>
							Consulting Room
						</Link>
					</Breadcrumbs>

					<Typography className="text-24 md:text-24" variant="h4">
						<Clock format={'MM/DD/YYYY HH:mm:ss'} ticking={true} timezone={'asia/seoul'}/>
					</Typography>
				</div>
				<div className="flex justify-between items-start">
					<Typography className="py-0 sm:py-24 text-24 md:text-32" variant="h5">
						Consulting Room
					</Typography>
				</div>
			</div> 
		}
		contentToolbar={
			<Table>
				<TableHead>	
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell className="hidden sm:table-cell w-60">
							<TimelineItem className="py-20">
								<TimelineSeparator>
								<TimelineDot color="secondary" />
								</TimelineSeparator>
								<TimelineContent>09:30</TimelineContent>
							</TimelineItem>
						</TableCell>
						<TableCell>Jaine Jang</TableCell>
						<TableCell className="hidden sm:table-cell">HTN</TableCell>
						<TableCell className="hidden sm:table-cell">ROUTINE</TableCell>
						<TableCell className="text-center hidden sm:table-cell">
							<IconButton>
									<Icon>email</Icon>
							</IconButton>
						</TableCell>
						<TableCell className="hidden sm:table-cell">
							<Icon>play_arrow</Icon>
						</TableCell>
					</TableRow>
					</TableBody>
					</Table>
		}
		content={
			<div className="p-12">
				<FuseAnimateGroup
					className="flex flex-wrap"
					enter={{
						animation: 'transition.slideUpBigIn'
					}}
				>
				<div className="widget flex w-full sm:w-1/2 md:w-3/4 p-12">
					<Paper className="w-full rounded-8 shadow-1" style={{marginTop: 1 + 'em'}}>
						<div className="text-16 py-5 px-10">
							<div className="flex items-center px-4 pt-4 py-5">
								<img
									src="assets/images/demo-content/morain-lake.jpg"
									alt="beach"
									style={{
										maxWidth: '1200px',
										width: '100%'
									}}
									className="rounded-6"
								/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
						<table class="w-full">
							<thead>
							</thead>
							<tbody>
								<tr>
								<th><Icon fontSize="large">perm_contact_calendar</Icon></th>
								<td><Icon fontSize="large">event_note</Icon></td>
								<td><Icon fontSize="large">filter</Icon></td>
								<td><Icon fontSize="large">insert_chart</Icon></td>
								<td><Icon fontSize="large">textsms</Icon></td>
								<td><Icon fontSize="large">add_ic_call</Icon></td>
								<td><Icon fontSize="large">cancel</Icon></td>
								</tr>
							</tbody>
						</table>
						</div>
					</Paper>
				</div>
				<div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
					<Paper className="w-full rounded-8 shadow-1" style={{marginTop: 1 + 'em'}}>
						<div className="flex items-center justify-between px-4 pt-4" >
							<div className="px-12">
								<h2>Doctor's Note</h2>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex items-center px-4 pt-4 py-5">
							<div className="px-10">
								<br/>
							</div>
						</div>
						<div className="flex flex-row items-right pr-4 pt-4 py-5">
							<Icon fontSize="large">check_circle</Icon>
						</div>
					</Paper>
				</div>
				</FuseAnimateGroup>
			</div>
		}
	/>
	);
}

export default withReducer('eCommerceApp', reducer)(Orders);
