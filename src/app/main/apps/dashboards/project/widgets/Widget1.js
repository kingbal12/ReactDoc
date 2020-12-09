import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';

function Widget1(props) {
	const [currentRange, setCurrentRange] = useState(props.widget.currentRange);

	function handleChangeRange(ev) {
		setCurrentRange(ev.target.value);
	}

	return (
		<Paper className="w-full rounded-8 shadow-1">
			<div className="flex items-center justify-between px-4 pt-4">
				<div className="px-12">
					Notice
				</div>
				<IconButton aria-label="more" href="/apps/mail/inbox">
						<Icon color="grey" >more_vert</Icon>
				</IconButton>
			</div>
			<div className="px-16 pt-12 pb-28">
				<Typography className="text-16">
					11/11 서비스 변경 작업
				</Typography>
				<Typography className="text-16">
					11/09 서비스 이용약관 변경
				</Typography>
				<Typography className="text-16">
					10/25 프로그램 업데이트 공지
				</Typography>
				<Typography className="text-16">
					09/10 서비스 공지
				</Typography>
				<Typography className="text-16">
					<br />
				</Typography>
				<Typography className="text-16">
					<br />
				</Typography>
			</div>
		</Paper>
	);
}

export default React.memo(Widget1);
