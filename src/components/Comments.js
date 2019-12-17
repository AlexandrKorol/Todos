import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../actions/Comments';
import { Translate } from 'react-redux-i18n';
import {
	Paper,
	Button,
	Avatar,
	OutlinedInput,
	makeStyles
} from '@material-ui/core';
import CommentList from './CommentList';
const Comments = props => {
	const { ownId, comments, active, itemList } = props;
	const inputRef = useRef(0);
	const [comment, setState] = useState('');

	const setValue = e => {
		setState(e.target.value);
	};
	const addComment = e => {
		if (comment !== null && comment.length !== 0) {
			props.addComment({
				id: active,
				ownId: ownId,
				body: comment
			});
			inputRef.current.firstChild.value = '';
			setState('')
		}
	};

	const styles = makeStyles({
		commentBlock: {
			padding: '20px 20px 0 20px',
			height: '100%'
		},
		comments: {
			padding: '30px',
			height: '82vh',
			display: 'flex',
			flexDirection: 'column'
		},
		commentsWrapper: {
			maxHeight: '75%',
			overflowY: 'scroll',
			overflowX: 'hidden'
		},
		commentFieldWrapper: {
			marginTop: 'auto'
		},
		commentField: {
			display: 'flex',
			justifyContent: 'space-between',
			marginTop: '10px'
		},
		textField: {
			width: '77%'
		},
		btnWithLine: {
			alignSelf: 'flex-end',
			marginTop: '20px',
			display: 'flex'
		},
		lineForBtn: {
			alignSelf: 'center',
			width: '80%',
			height: '1px',
			background: 'lightgrey'
		},
		btn: {
			width: '20%',
			backgroundColor: '#6AC5FE!important'
		}
	});
	const classes = styles();
	let commentId = itemList.filter(item => item.id === active);
	return (
		<div className={classes.commentBlock}>
			<Paper className={classes.comments}>
				<h2>
					<Translate value="comments" />
					{active !== null ? (
						<span>#{commentId[0].ownId + 1}</span>
					) : null}
				</h2>

				{active !== null ? (
					<div className={classes.commentsWrapper}>
						<CommentList
							comments={comments}
							active={active}
							addComment={addComment}
						/>
					</div>
				) : null}
				{active !== null ? (
					<div className={classes.commentFieldWrapper}>
						<div className={classes.commentField}>
							<Avatar sizes="medium" variant="square" />
							<OutlinedInput
								multiline
								id="outlined-basic"
								variant="outlined"
								className={classes.textField}
								size="small"
								onChange={setValue}
								ref={inputRef}
								rowsMax={3}
							/>
						</div>
						<div className={classes.btnWithLine}>
							<div className={classes.lineForBtn}></div>
							<Button
								variant="contained"
								color="primary"
								size="medium"
								className={classes.btn}
								onClick={addComment}
							>
								<Translate value="addNew" />
							</Button>
						</div>
					</div>
				) : null}
			</Paper>
		</div>
	);
};

const mapStateToProps = state => ({
	comments: state.comments.commentsArray,
	itemList: state.toDoList.itemList,
	active: state.toDoList.active,
	ownId: state.comments.commentId
});

const mapDispatchToProps = dispatch => ({
	addComment: comment => {
		dispatch(addComment(comment));
	}
});

Comments.propTypes = {
	comments: PropTypes.array.isRequired,
	active: PropTypes.number,
	ownId: PropTypes.number.isRequired,
	addComment: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
