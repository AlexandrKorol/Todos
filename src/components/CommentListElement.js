import React, { useEffect, useState, useRef } from 'react';
import { makeStyles, Avatar, Tooltip } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import PropTypes from 'prop-types';

const CommentListElement = props => {
	const { body } = props;
	const useStyles = makeStyles({
		square: {
			color: '#ff',
			backgroundColor: deepOrange[500]
		},
		commentItem: {
			display: 'flex',
			margin: '20px 0 0 0',
			paddingBottom: '20px',
			borderBottom: '1px solid lightgrey'
		},
		commentTextArea: {
			paddingLeft: '20px',
			wordWrap: 'break-word',
			overflow: 'hidden',
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis'
		},
		dots: {
			color: 'blue',
			fontSize: '2rem'
		},
		wrapper: {
			display: 'grid'
		},
		body: {
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		}
	});
	const classes = useStyles();

	let listRef = useRef(null);
	const [state, setState] = useState(0);
	useEffect(() => {
		let checker = listRef.current.scrollWidth > listRef.current.offsetWidth;
		setState(checker);
	}, []);
	return (
		<li className={classes.commentItem}>
			<Avatar variant="square" className={classes.square} />
			<span className={classes.commentTextArea} ref={listRef}>
				{state ? (
					<Tooltip title={body}>
						<span className={classes.wrapper}>
							<span className={classes.body}>{body}</span>
							<span className={classes.dots}>...</span>{' '}
						</span>
					</Tooltip>
				) : (
					<span>{body}</span>
				)}
			</span>
		</li>
	);
};
CommentListElement.propTypes = {
	body: PropTypes.string.isRequired
};
export default CommentListElement;
