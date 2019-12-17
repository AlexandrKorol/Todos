import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';
import CommentListElement from './CommentListElement';



const CommentList = props => {
	
	const { comments, active } = props;
	return (
		<ul>
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
