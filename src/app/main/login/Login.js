import FuseAnimate from '@fuse/core/FuseAnimate';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import clsx from 'clsx';
import React, { useState } from 'react';
import Auth0LoginTab from './tabs/Auth0LoginTab';
import FirebaseLoginTab from './tabs/FirebaseLoginTab';
import JWTLoginTab from './tabs/JWTLoginTab';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
	root: {
		background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	},
	leftSection: {},
	rightSection: {
		background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	}
}));
  

function Login() {
	const classes = useStyles();
	const [selectedTab, setSelectedTab] = useState(0);

	function handleTabChange(event, value) {
		setSelectedTab(value);
	}
	  const [age, setAge] = React.useState('');
	  const handleChange = (event) => {
		setAge(event.target.value);
	  };

	return (
		<div
			className={clsx(
				classes.root,
				'flex flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24'
			)}
		>
			<FuseAnimate animation="transition.expandIn">
				<div className="flex w-full max-w-400 rounded-12 shadow-2xl overflow-hidden">
					<Card
						className={clsx(
							classes.leftSection,
							'flex flex-col w-full max-w-sm items-center justify-center'
						)}
						square
						elevation={0}
					>
						<CardContent className="flex flex-col items-center justify-center w-full py-55 max-w-320">
							<FuseAnimate delay={300}>
								<div className="flex items-center mb-25">
									<img className="logo-icon w-25" src="assets/images/logos/user_register_logo.png" alt="logo" />
								</div>
							</FuseAnimate>

							<div className="flax flax-col  justify-right">

							<FormControl className={classes.formControl}>
								<Select
								value={age}
								onChange={handleChange}
								displayEmpty
								className={classes.selectEmpty}
								inputProps={{ 'aria-label': 'Without label' }}
								>
								<MenuItem value="">
									<em>English(US)</em>
								</MenuItem>
								<MenuItem value={10}>Korean</MenuItem>
								<MenuItem value={20}>Italian</MenuItem>
								</Select>
								<br />
							</FormControl>
							</div>
							{selectedTab === 0 && <JWTLoginTab />}
							{selectedTab === 1 && <FirebaseLoginTab />}
							{selectedTab === 2 && <Auth0LoginTab />}
						</CardContent>
					</Card>
				</div>
			</FuseAnimate>
		</div>
	);
}

export default Login;
