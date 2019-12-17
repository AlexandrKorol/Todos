import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import List from './List';
import Comments from './Comments';

const styles = makeStyles({
	table: {
		height: '100%',
		width: '100%'
	},
	'@global': {
		body: {},
		'::-webkit-scrollbar': {
			display: 'none'
		},
		h2: {
			fontSize: '2.4rem',
			fontWeight: '100'
		}
	}
});

const TodoSection = () => {
	const classes = styles();
	return (
		<div className={classes.table}>
			<Grid container justify="center">
				<Grid item xs={12} md={6} style={{ minHeight: 600 }}>
					<List />
				</Grid>
				<Grid item xs={12} md={6}>
					<Comments />
				</Grid>
			</Grid>
		</div>
	);
};

export default TodoSection;
