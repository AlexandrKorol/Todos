import React from 'react';
import { Grid } from '@material-ui/core';
import List from './List';
import Comments from './Comments';

const TodoSection = () => {
	return (
		<div className="table">
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
