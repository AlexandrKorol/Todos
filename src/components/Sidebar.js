import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Translate } from 'react-redux-i18n';
import { makeStyles } from '@material-ui/core';
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
const styles = makeStyles({
	basicSingle: {
		width: '30%',
		alignSelf: 'center',
		marginBottom: '40%'
  },
  sidebar: {
    background: "#316A82",
    color: "white !important",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  h2:{
    padding: "40px 0 0 40px",
  },
  '@media(max-width: 768px)':{
	basicSingle:{
		marginBottom: '30%'
	},
	sidebar:{
		minHeight: '100vh'
	}
  }
});

const Sidebar = props => {
	const { changeLocale } = props;
	const changeLanguage = locale => {
		changeLocale(locale.value);
	};
	const classes = styles();
	return (
		<div className={classes.sidebar}>
			<h2 className={classes.h2}>
				<Translate value="toDo" />
			</h2>
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
		</div>
	);
};

Sidebar.propTypes = {
	changeLocale: PropTypes.func.isRequired
};

export default Sidebar;
