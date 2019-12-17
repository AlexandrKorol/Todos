import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import {setLocale} from 'react-redux-i18n';
import {connect} from 'react-redux';
import TodoSection from './components/TodoSection';
import Sidebar from './components/Sidebar';



const styles=makeStyles({
	mainWrapper:{
		height:" 100vh",
	},
})
function App(props) {
	const classes = styles();
	const {changeLocale,} = props;
	return (
			<Grid  container className={classes.mainWrapper} xs={12}>
				<Grid container xs={12} md={3} height={1}>
					<Sidebar changeLocale={changeLocale}/>
				</Grid>
				<Grid container xs={12} md={9}>
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
