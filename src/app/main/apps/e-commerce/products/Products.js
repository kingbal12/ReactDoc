import withReducer from 'app/store/withReducer';
import React, { Component } from 'react';
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
import { useHistory } from "react-router-dom";

function handleClick(event) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
  }

const useStyles = makeStyles(theme => ({
	layoutRoot: {}
}));


function Products(props) {
	const history = useHistory();
	const classes = useStyles(props);
	const { t } = useTranslation('examplePage');
	
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
						<Link color="inherit" href="/apps/e-commerce/products" onClick={handleClick}>
							Patient OverView
						</Link>
					</Breadcrumbs>

					<Typography className="text-24 md:text-24" variant="h4">
						<Clock format={'MM/DD/YYYY HH:mm:ss'} ticking={true} timezone={'asia/seoul'}/>
					</Typography>
				</div>
				<div className="flex justify-between items-start">
					<Typography className="py-0 sm:py-24 text-24 md:text-32" variant="h5">
						Patient OverView
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
							<IconButton onClick={() => history.push("/apps/e-commerce/orders")}>
								<Icon>play_arrow</Icon>
							</IconButton>
						</TableCell>
					</TableRow>
					</TableBody>
					</Table>
		}
		content={
			<div>
			<div className="p-12">
				<FuseAnimateGroup
					className="flex flex-wrap"
					enter={{
						animation: 'transition.slideUpBigIn'
					}}
				>
					<div className="widget flex flex-col w-full sm:w-1/2 md:w-1/3 p-12 jumbotron">
					<Paper className="w-full rounded-8 shadow-1">
			 				<div className="flex items-center justify-between px-4 pt-4">
			 					<div className="px-12">
			 						Personal Information
			 					</div>
			 					<IconButton aria-label="more">
			 						<Icon>more_vert</Icon>
			 					</IconButton>
			 				</div>
			 				<div className="text-16 py-5 px-10">
			 					<div className="flex items-center px-4 pt-4 py-5">
			 							<Icon fontSize="small">chevron_right</Icon>
			 						<div className="px-10">
			 							Name: Jane Jang
			 						</div>
			 					</div>
			 					<div className="flex items-center px-4 pt-4 py-5">
			 							<Icon fontSize="small">chevron_right</Icon>
			 						<div className="px-10">
			 							Gender: Female
			 						</div>
			 					</div>
			 					<div className="flex items-center px-4 pt-4 py-5">
			 							<Icon fontSize="small">chevron_right</Icon>
			 						<div className="px-10">
			 							Date of Birth: 1987.11.02
			 						</div>
			 					</div>
			 					<div className="flex items-center px-4 pt-4 py-5">
			 							<Icon fontSize="small">chevron_right</Icon>
			 						<div className="px-10">
			 							ID: 12345
			 						</div>
			 					</div>
			 					<div className="flex items-center px-4 pt-4 py-5">
			 							<Icon fontSize="small">chevron_right</Icon>
			 						<div className="px-10">
			 							Phone: 123-234
			 						</div>
			 					</div>
			 					<div className="flex items-center px-4 pt-4 py-5">
			 							<Icon fontSize="small">chevron_right</Icon>
			 						<div className="px-10">
			 							E-mail: JANE@co.kr
			 						</div>
			 					</div>
			 					<div className="flex items-center px-4 pt-4 py-5">
			 							<Icon fontSize="small">chevron_right</Icon>
			 						<div className="px-10">
			 							Addresss: Kyoto_Japan
			 						</div>
			 					</div>
			 				</div>
			 			</Paper>

						 <Paper className="w-full rounded-8 shadow-1" style={{marginTop: 1 + 'em'}}>
						 <div className="flex items-center justify-between px-4 pt-4">
									<div className="px-12">
										Physical Data
									</div>
									<IconButton aria-label="more">
										<Icon>more_vert</Icon>
									</IconButton>
								</div>
								<div className="text-16 py-5 px-10">
									<div className="flex items-center px-4 pt-4 py-5">
											<Icon fontSize="small">chevron_right</Icon>
										<div className="px-10">
											Height: 160cm
										</div>
									</div>
									<div className="flex items-center px-4 pt-4 py-5">
											<Icon fontSize="small">chevron_right</Icon>
										<div className="px-10">
											Weight: 65kg
										</div>
									</div>
									<div className="flex items-center px-4 pt-4 py-5">
											<Icon fontSize="small">chevron_right</Icon>
										<div className="px-10">
											Blood Type: B
										</div>
									</div>
								</div>
			 			</Paper>

						 <Paper className="w-full rounded-8 shadow-1" style={{marginTop: 1 + 'em'}}>
						 <div className="flex items-center justify-between px-4 pt-4">
									<div className="px-12">
										Past Histoty
									</div>
									<IconButton aria-label="more">
										<Icon>more_vert</Icon>
									</IconButton>
								</div>
								<div className="text-16 py-5 px-10">
									<div className="flex items-center px-4 pt-4 py-5">
											<Icon fontSize="small">chevron_right</Icon>
										<div className="px-10">
											Past History: None
										</div>
									</div>
									<div className="flex items-center px-4 pt-4 py-5">
											<Icon fontSize="small">chevron_right</Icon>
										<div className="px-10">
											Familly History: Stroke(Father)
										</div>
									</div>
								</div>
			 			</Paper>
						 
					</div>
					
					<div className="widget flex flex-col w-full sm:w-1/2 md:w-1/3 p-12">
					<Paper className="w-full rounded-8 shadow-1">
			 				<div className="flex items-center justify-between px-4 pt-4">
			 					<div className="px-12">
			 						Past Cunsulting List
			 					</div>
			 					<IconButton aria-label="more">
			 						<Icon>more_vert</Icon>
			 					</IconButton>
			 				</div>
			 				<div className="text-16 py-5 px-10">
			 					<div className="flex items-center px-4 pt-4 py-5">
			 						<div className="px-10">
			 							11.09.2020 HTN Dr. Julia Kim
			 						</div>
			 					</div>
			 					<div className="flex items-center px-4 pt-4 py-5">
			 						<div className="px-10">
			 							10.20.2020.HTN Dr.Julia Kim
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
			 				</div>
			 			</Paper>
						 <Paper className="w-full rounded-8 shadow-1" style={{marginTop: 1 + 'em'}}>
								<div className="flex items-center justify-between px-4 pt-4" >
									<div className="px-12">
										Present Condition
									</div>
									<IconButton aria-label="more">
										<Icon>more_vert</Icon>
									</IconButton>
								</div>
								<div className="text-16 py-5 px-10">
									<div className="flex items-center px-4 pt-4 py-5">
											<Icon fontSize="small">chevron_right</Icon>
										<div className="px-10">
											별일없이 잘 지냈어요. 컨디션 좋아요
										</div>
									</div>
									<div className="flex items-center px-4 pt-4 py-5">
											<Icon fontSize="small">chevron_right</Icon>
										<div className="px-10">
											<br/>
										</div>
									</div>
									<div className="flex items-center px-4 pt-4 py-5">
											<Icon fontSize="small">chevron_right</Icon>
										<div className="px-10">
											<br/>
										</div>
									</div>
								</div>
						</Paper>
						<Paper className="w-full rounded-8 shadow-1" style={{marginTop: 1 + 'em'}}>
						 <div className="flex items-center justify-between px-4 pt-4">
									<div className="px-12">
										Files
									</div>
									<IconButton aria-label="more">
										<Icon>more_vert</Icon>
									</IconButton>
								</div>
								<div className="text-16 py-5 px-10">
									<div className="flex items-center px-4 pt-4 py-5">
										<img
											src="assets/images/demo-content/morain-lake.jpg"
											alt="beach"
											style={{
												maxWidth: '100px',
												width: '100%'
											}}
											className="rounded-6"
										/>
									</div>
								</div>
			 			</Paper>
					</div>
					<div className="widget flex flex-col w-full sm:w-1/2 md:w-1/3 p-12">
					<Paper className="w-full rounded-8 shadow-1">
			 				<div className="flex items-center justify-between px-4 pt-4">
			 					<div className="px-12">
			 						Blood Pressure
			 					</div>
			 					<IconButton aria-label="more">
			 						<Icon>more_vert</Icon>
			 					</IconButton>
			 				</div>
			 				<div className="text-16 py-5 px-10">
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
			 				</div>
			 			</Paper>
						 <Paper className="w-full rounded-8 shadow-1" style={{marginTop: 2 + 'em'}}>
									<div className="flex items-center justify-between px-4 pt-4">
										<div className="px-12">
											Body Weight
										</div>
										<IconButton aria-label="more">
											<Icon>more_vert</Icon>
										</IconButton>
									</div>
									<div className="text-16 py-5 px-10">
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
									</div>
								</Paper>
					</div>
				</FuseAnimateGroup>
			</div>

		</div>


			

			
		}
	/>
	);
}

export default withReducer('eCommerceApp', reducer)(Products);
