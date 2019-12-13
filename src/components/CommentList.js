import React from 'react';
import { makeStyles,Avatar } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles({
	square: {
		color: '#ff',
		backgroundColor: deepOrange[500],
    },
    commentItem:{
        display: "flex",
        margin: '20px 0 0 0',
        paddingBottom: "20px",
        borderBottom: '1px solid lightgrey',
        
    },
    commentTextArea:{
        paddingLeft: '20px',
        wordWrap: 'break-word',
        overflow: 'hidden'
    }
});
const CommentList = props => {
	const classes = useStyles();
    const {comments, active} = props;
	return (
		<ul>
			{comments !== undefined
				? comments.map(item => {
					return item.id === active
						? (
							<li key={item.ownId} className={classes.commentItem}>
								<Avatar variant="square" className={classes.square}/>
								<span className={classes.commentTextArea}>
									{item.body}
								</span>
							</li>
						)
						: null;
				})
				: null}
		</ul>
	);
};

export default CommentList;
