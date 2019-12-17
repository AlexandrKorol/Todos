import React from 'react';
import PropTypes from 'prop-types';
import CommentListElement from './CommentListElement';
import {makeStyles} from "@material-ui/core"


const CommentList = props => {
	
	const styles=makeStyles({
		list:{
			padding:0
		}
	})

	const { comments, active } = props;
	const classes = styles();
	return (
		<ul className={classes.list}>
			{comments !== undefined
				? comments.map(item => {
						return item.id === active ? (
							<CommentListElement key={item.ownId}
								body={item.body}>
							</CommentListElement>
						) : null;
				  })
				: null}
		</ul>
	);
};
CommentList.propTypes = {
	comments: PropTypes.array.isRequired,
	active: PropTypes.number
};
export default CommentList;
