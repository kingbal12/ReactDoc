import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import Calendar from 'react-calendar'

function Widget2(props) {
	const history = useHistory();
	const [value, onChange] = useState(new Date());
	
	return (
		<Paper className="w-full rounded-8 shadow-1">
			<div className="flex items-center justify-between px-4 pt-4">
				<Typography className="text-16 px-12">{props.widget.title}</Typography>
				<IconButton aria-label="more" onClick={() => history.push("/apps/calendar")}>
					<Icon>more_vert</Icon>
				</IconButton>
			</div>
			<div>
			<Calendar
				onChange={onChange}
				value={value}
				/>
			</div>
		</Paper>
		
	);
}

export default React.memo(Widget2);
