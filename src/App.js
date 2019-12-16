import React from 'react';
import { Grid } from '@material-ui/core';
import {setLocale} from 'react-redux-i18n';
import {connect} from 'react-redux';
import TodoSection from './components/TodoSection';
import Sidebar from './components/Sidebar';

import './App.css';

function App(props) {
	
	const {changeLocale,} = props;
	return (
			<Grid display='flex' container className='mainWrapper'>
				<Grid item xs={12} md={3} height={1}>
					<Sidebar changeLocale={changeLocale}/>
				</Grid>
				<Grid item xs={12} md={9}>
					<TodoSection />
				</Grid>
			</Grid>
	);
}


const mapDispatchToProps =(dispatch)=> ({
	changeLocale: (lang)=>{
		dispatch(setLocale(lang))
	  }
})

export default connect(null,mapDispatchToProps)(App);
