import FuseAnimate from '@fuse/core/FuseAnimate';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedItem, selectFiles } from './store/filesSlice';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';



const useStyles = makeStyles({
	typeIcon: {
		'&.folder:before': {
			content: "'folder'",
			color: '#FFB300'
		},
		'&.document:before': {
			content: "'insert_drive_file'",
			color: '#1565C0'
		},
		'&.spreadsheet:before': {
			content: "'insert_chart'",
			color: '#4CAF50'
		}
	}
});

function FileList(props) {
	const dispatch = useDispatch();
	const files = useSelector(selectFiles);
	const selectedItemId = useSelector(({ fileManagerApp }) => fileManagerApp.files.selectedItemId);
	

	const classes = useStyles();

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
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
					{files.map(item => {
						return (
							<TableRow
								key={item.id}
								hover
								onClick={event => dispatch(setSelectedItem(item.id))}
								selected={item.id === selectedItemId}
								className="cursor-pointer"
							>
								
								<TableCell className="hidden sm:table-cell">
								<TimelineItem className="py-20">
									<TimelineSeparator>
									<TimelineDot color="secondary" />
									</TimelineSeparator>
									<TimelineContent>{item.modified}</TimelineContent>
								</TimelineItem>
								</TableCell>
								
								{/* 파일의 타입별로 아이콘이 나타나는 부분 */}
								<TableCell>
									{item.name}
								</TableCell>
								<TableCell className="hidden sm:table-cell">{item.symptom}</TableCell>
								<TableCell className="hidden sm:table-cell">{item.check}</TableCell>
								<TableCell className="text-center hidden sm:table-cell">
									{/* {item.size === '' ? '-' : item.size} */}
									<IconButton>
											<Icon>email</Icon>
									</IconButton>
								</TableCell>
								<TableCell className="hidden sm:table-cell">
									<Icon>play_arrow</Icon>
								</TableCell>
								{/* <Hidden lgUp>
									<TableCell>
										<IconButton
											onClick={ev => props.pageLayout.current.toggleRightSidebar()}
											aria-label="open right sidebar"
										>
											<Icon>info</Icon>
										</IconButton>
									</TableCell>
								</Hidden> */}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</FuseAnimate>
	);
}

export default FileList;
