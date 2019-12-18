import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Translate } from 'react-redux-i18n';
import { makeStyles, useMediaQuery, IconButton, Menu, MenuItem  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
const options = [
	{ value: 'en', label: 'English' },
	{ value: 'ru', label: 'Русский' }
];

const myStyles = {
	option: (provided, state) => ({
		...provided,
		background: 'none'
	}),
	menu: (provided, state) => ({
		...provided,
		backgroundColor: '#F7AE4C',
		color: 'white'
	}),
	control: (provided, state) => ({
		...provided,
		background: '#22A8FE',
		border: 'none'
	}),
	valueContainer: (provided, state) => ({
		...provided,
		justifyContent: 'center'
	}),
	placeholder: (provided, state) => ({
		...provided,
		color: 'white'
	}),
	singleValue: (provided, state) => ({
		...provided,
		color: 'white'
	})
};
const styles = makeStyles(theme=>({
	basicSingle: {
		width: '30%',
		alignSelf: 'center',
		marginBottom: '40%'
	},
	sidebar: {
		background: '#316A82',
		color: 'white !important',
    	height: '100%',
    	width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	h2: {
		padding: '0 0 0 40px',
		width: 'fit-content'
	},
	'@media(max-width: 959px)': {
		basicSingle: {
			marginBottom: '30%'
		},
		sidebar: {
			minHeight: '20vh',
			flexDirection: 'row',
			
		},
		menuList:{
				background: '#F7AE4C', 
				color: 'white'
		}
	},
	burgerBtn:{
		width: 'fit-content',
		height: 'fit-content'
	},
	
}));

const Sidebar = props => {
	const { changeLocale } = props;
	const changeLanguage = locale => {
		changeLocale(locale.value);
	};
	const mobileChangeLang = e=>{
		console.log(e.target.attributes.value.value)
		changeLocale(e.target.attributes.value.value);
		setAnchorEl(null);
	}
	const classes = styles();
	const widthCheck = useMediaQuery('(max-width:959px)');

	const [anchorEl, setAnchorEl] = React.useState(null);

  	const handleClick = event => {
    setAnchorEl(event.currentTarget);
  	};

  	const handleClose = () => {
    setAnchorEl(null);
  	};


	return (
		<div className={classes.sidebar}>
			
				{
					widthCheck ? 
					<>
						<h2 className={classes.h2}><Translate value="toDo" /></h2>
					<IconButton aria-controls="simple-menu" aria-haspopup="true" 
								color="inherit" aria-label="menu" onClick={handleClick}
								className={classes.burgerBtn} >
						<MenuIcon /> 
					</IconButton>
					<Menu 
					id="simple-menu"
					anchorEl={anchorEl}
        			keepMounted
        			open={Boolean(anchorEl)}
					onClose={handleClose}
					classes={{list:classes.menuList}}
					>
					<MenuItem value='en' onClick={mobileChangeLang}>
					English
					</MenuItem>
					<MenuItem value='ru' onClick={mobileChangeLang}>
					Русский
					</MenuItem>	
					</Menu>
					</>
					: 
					<>
					<h2 className={classes.h2}><Translate value="toDo" /></h2>
					<Select
					defaultValue="en"
					className={classes.basicSingle}
					classNamePrefix="select"
					options={options}
					name="color"
					styles={myStyles}
					isSearchable={false}
					components={{
						DropdownIndicator: () => null,
						IndicatorSeparator: () => null
					}}
					onChange={changeLanguage}
					placeholder="Language"
				/>
					</>
				}
			
			
			
		</div>
	);
};

Sidebar.propTypes = {
	changeLocale: PropTypes.func.isRequired
};

export default Sidebar;
