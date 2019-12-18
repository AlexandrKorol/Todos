import React from 'react';
import { makeStyles, Container, Box } from '@material-ui/core';
import { setLocale } from 'react-redux-i18n';
import { connect } from 'react-redux';
import TodoSection from './components/TodoSection';
import Sidebar from './components/Sidebar';

const styles = makeStyles({
	mainWrapper: {
		height: '100vh',
		display: 'flex'
	},
	box: {
		height: '100vh'
	},
	'@media (min-width:959px)': {
		box: {
			display: 'flex'
		}
	},
	sidebar: {
		flex: '3',
		padding: '0'
	},
	mainContent: {
		flex: '9',
		padding: '0'
	}
});
function App(props) {
	const classes = styles();
	const { changeLocale } = props;
	return (
		<Box className={classes.box}>
			<Container maxWidth="md" className={classes.sidebar}>
				<Sidebar changeLocale={changeLocale} />
			</Container>
			<Container maxWidth="xl" className={classes.mainContent}>
				<TodoSection />
			</Container>
		</Box>
	);
}

const mapDispatchToProps = dispatch => ({
	changeLocale: lang => {
		dispatch(setLocale(lang));
	}
});

export default connect(null, mapDispatchToProps)(App);
