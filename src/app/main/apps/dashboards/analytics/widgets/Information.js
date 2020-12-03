import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Line } from 'react-chartjs-2';
import _ from '@lodash';
import Avatar from '@material-ui/core/Avatar';

function Informaiton(props) {
	return (
		<Card className="w-full rounded-8 shadow-1">
			<div className="p-16 pb-0 flex flex-row flex-wrap items-end">
			<div className="">
					<Typography className="h3" color="textSecondary">
						Notice
					</Typography>
			</div>
			</div>
			<div className="py-4 text-16 flex flex-row items-center">
				<div className="flex flex-row items-center justify-between">
				<Avatar className="w-96 h-96 flex flex-row items-center justify-center" src="assets/images/avatars/Velazquez.jpg" />
				</div>
			</div>
			<div className="text-center pt-12 pb-28">
				Hello Doctor Marry
				<br></br>
			</div>
			<div className= ""></div>
		</Card>
	);
}

export default React.memo(Informaiton);
