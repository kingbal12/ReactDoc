import _ from '@lodash';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import MailChip from '../MailChip';
import { toggleInSelectedMails } from '../store/mailsSlice';
import { selectLabelsEntities } from '../store/labelsSlice';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const pathToRegexp = require('path-to-regexp');

const useStyles = makeStyles(theme => ({
	// mailItem: {
	// 	borderBottom: `1px solid  ${theme.palette.divider}`,

	// 	'&.unread': {
	// 		background: 'rgba(0,0,0,0.03)'
	// 	},
	// 	'&.selected': {
	// 		'&::after': {
	// 			content: '""',
	// 			position: 'absolute',
	// 			left: 0,
	// 			display: 'block',
	// 			height: '100%',
	// 			width: 3,
	// 			backgroundColor: theme.palette.primary.main
	// 		}
	// 	}
	// },
	// avatar: {
	// 	backgroundColor: theme.palette.primary[500]
	// },
	root: {
		width: '95%',
		marginLeft: '40px'
	  },
	  heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	  },
	  
	  
	
}));

const MailListItem = props => {
	const dispatch = useDispatch();
	const selectedMailIds = useSelector(({ mailApp }) => mailApp.mails.selectedMailIds);
	const labels = useSelector(selectLabelsEntities);
	const routeParams = useParams();

	const classes = useStyles(props);
	const toPath = pathToRegexp.compile(props.match.path);
	const checked = selectedMailIds.length > 0 && selectedMailIds.find(id => id === props.mail.id) !== undefined;

	return (
		<div className="flex">
			<div className={classes.root}>
				<Accordion>
					<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					>
					<Typography className={classes.heading}>{props.mail.from.name}</Typography>
					</AccordionSummary>
					<AccordionDetails>
					<Typography>
						{props.mail.subject}
					</Typography>
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
		/* <ListItem
			dense
			button
			onClick={() =>
				props.history.push(
					toPath({
						...routeParams,
						mailId: props.mail.id
					})
				)
			}
			className={clsx(
				classes.mailItem,
				checked && 'selected',
				!props.mail.read && 'unread',
				'py-16 px-0 md:px-8'
			)}
		> */
			

			/* <div className="flex flex-1 flex-col relative overflow-hidden">
				<div className="flex items-center justify-between px-16 pb-8">
					<div className="flex items-center">
						
						<Typography variant="subtitle1" className="mx-8">
							{props.mail.from.name}
						</Typography>
					</div>
					<Typography variant="subtitle1">{props.mail.time}</Typography>
				</div>

				<div className="flex flex-col px-16 py-0">
					<Typography className="truncate">{props.mail.subject}</Typography> */
					/* <Typography color="textSecondary" className="truncate">
						{_.truncate(props.mail.message.replace(/<(?:.|\n)*?>/gm, ''), { length: 180 })}
					</Typography> */
					/* 본문이 180자 까지 나왔던 부분 */
				/* </div>

				<div className="flex justify-end px-12">
					{!_.isEmpty(labels) &&
						props.mail.labels.map(label => (
							<MailChip
								className="mx-2 mt-4"
								title={labels[label].title}
								color={labels[label].color}
								key={label}
							/>
						))}
				</div>
			</div>
		</ListItem> */
		
	);
};

export default withRouter(MailListItem);
