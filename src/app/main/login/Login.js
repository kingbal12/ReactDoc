import FuseAnimate from '@fuse/core/FuseAnimate';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth0LoginTab from './tabs/Auth0LoginTab';
import FirebaseLoginTab from './tabs/FirebaseLoginTab';
import JWTLoginTab from './tabs/JWTLoginTab';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
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
									{/* <div className="border-l-1 mr-4 w-1 h-40" />
									<div>
										<Typography className="text-24 font-800 logo-text" color="inherit">
											HICARE
										</Typography>
										<Typography
											className="text-16 tracking-widest -mt-8 font-700"
											color="textSecondary"
										>
											REACT
										</Typography>
									</div> */}
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

							{/* <Tabs
								value={selectedTab}
								onChange={handleTabChange}
								variant="fullWidth"
								className="w-full mb-32"
							>
								<Tab
									icon={
										<img
											className="h-40 p-4 bg-black rounded-12"
											src="assets/images/logos/jwt.svg"
											alt="firebase"
										/>
									}
									className="min-w-0"
									label="JWT"
								/>
								<Tab
									icon={
										<img className="h-40" src="assets/images/logos/firebase.svg" alt="firebase" />
									}
									className="min-w-0"
									label="Firebase"
								/>
								<Tab
									icon={<img className="h-40" src="assets/images/logos/auth0.svg" alt="auth0" />}
									className="min-w-0"
									label="Auth0"
								/>
							</Tabs> */}

							{selectedTab === 0 && <JWTLoginTab />}
							{selectedTab === 1 && <FirebaseLoginTab />}
							{selectedTab === 2 && <Auth0LoginTab />}
						</CardContent>

						{/* <div className="flex flex-col items-center justify-center pb-32">
							<div>
								<span className="font-medium mr-8">Don't have an account?</span>
								<Link className="font-medium" to="/register">
									Register
								</Link>
							</div>
							<Link className="font-medium mt-8" to="/">
								Back to Dashboard
							</Link>
						</div> */}
					</Card>

					{/* <div
						className={clsx(classes.rightSection, 'hidden md:flex flex-1 items-center justify-center p-64')}
					>
						<div className="max-w-320">
							<FuseAnimate animation="transition.slideUpIn" delay={400}>
								<Typography variant="h3" color="inherit" className="font-800 leading-tight">
									Welcome <br />
									to the <br /> FUSE React!
								</Typography>
							</FuseAnimate>

							<FuseAnimate delay={500}>
								<Typography variant="subtitle1" color="inherit" className="mt-32">
									Powerful and professional admin template for Web Applications, CRM, CMS, Admin
									Panels and more.
								</Typography>
							</FuseAnimate>
						</div>
					</div> */}
				</div>
			</FuseAnimate>
		</div>
	);
}

export default Login;
