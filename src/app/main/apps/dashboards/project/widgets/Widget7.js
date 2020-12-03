import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

function Widget7(props) {
	const [currentRange, setCurrentRange] = useState(props.widget.currentRange);

	function handleChangeRange(ev) {
		setCurrentRange(ev.target.value);
	}

	return (
		<Paper className="w-full rounded-8 shadow-1">
			<div className="flex items-center justify-between px-16 h-64 border-b-1">
				<Typography className="text-16">{props.widget.title}</Typography>

				<Select
					native
					value={currentRange}
					onChange={handleChangeRange}
					inputProps={{
						name: 'currentRange'
					}}
					disableUnderline
				>
					{Object.entries(props.widget.ranges).map(([key, n]) => {
						return (
							<option key={key} value={key}>
								{n}
							</option>
						);
					})}
				</Select>
			</div>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell className="max-w-64 w-64 p-0 text-center"> </TableCell>
						{/* 파일의 아이콘이 나타나는 부분의 테이블 헤드 */}
						<TableCell>Name</TableCell>
						<TableCell className="hidden sm:table-cell">Symptom</TableCell>
						<TableCell className="hidden sm:table-cell">Check</TableCell>
						<TableCell className="text-center hidden sm:table-cell">Message</TableCell>
						<TableCell className="hidden sm:table-cell">Detail</TableCell>
					</TableRow>
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
					<TableRow>
						<TableCell className="hidden sm:table-cell w-60">
							<TimelineItem className="py-20">
								<TimelineSeparator>
								<TimelineDot color="primary" />
								</TimelineSeparator>
								<TimelineContent>10:30</TimelineContent>
							</TimelineItem>
						</TableCell>
						<TableCell>Robin Choi</TableCell>
						<TableCell className="hidden sm:table-cell">Asthma</TableCell>
						<TableCell className="hidden sm:table-cell">URGENT</TableCell>
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
			{/* <List>
				{props.widget.schedule[currentRange].map(item => (
					<ListItem key={item.id}>
						<ListItemText primary={item.title} secondary={item.time} />
						<ListItemSecondaryAction>
							<IconButton aria-label="more">
								<Icon>more_vert</Icon>
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List> */}
		</Paper>
	);
}

export default React.memo(Widget7);
