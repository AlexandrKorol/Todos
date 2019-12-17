import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { deleteToDo, activateToDo } from '../actions/ToDoList';
import { filterComments } from '../actions/Comments';
import { Button, makeStyles, Tooltip } from '@material-ui/core';
import cn from 'classnames';
const ListElement = props => {
	const { activateToDo, id, title, active, comments } = props;

	const makeActive = id => e => {
		activateToDo(id);
	};
	const removeToDo = id => e => {
		const { toDoList, rmToDo, activateToDo } = props;
		e.stopPropagation();
		let newList = toDoList.filter(item => {
			return item.id !== id;
		});
		let filtered = newList.map((item, index) => {
			return { ...item, ownId: index };
		});
		rmToDo(filtered, id);
		if (newList.length > 0) activateToDo(filtered[filtered.length - 1].id);
	};

	const styles = makeStyles({
		toDoItemWrap: {
			justifyContent: 'space-between',
			overflow: 'hidden',
			display: 'flex',
			width: '95%',
			marginLeft: '30px',
			paddingBottom: '10px',
			paddingTop: '10px'
		},

		todoListItem: {
			display: 'flex',
			justifyContent: 'space-between',
			cursor: 'pointer',
			'&.active': {
				display: 'flex',
				'&:before': {
					content: '" "',
					position: 'static',
					width: '4px',
					height: 'auto',
					background: 'green'
				},
				'& $toDoItemWrap': {
					borderBottom: '1px solid lightgrey'
				}
			}
		},
		deleteBtn: {
			alignSelf: 'center'
		},
		commentText: {
			width: '85%',
			display: 'flex',
			justifyItems: 'center',
			alignSelf: 'center',
			overflow: 'hidden'
		},
		innerTexts: {
			textOverflow: 'ellipsis',
			maxWidth: '94%',
			overflow: 'hidden',
			whiteSpace: 'nowrap'
		},
		commentCounter: {
			marginLeft: '5px',
			alignSelf: 'flex-start',
			marginRight: '10px',
			background: 'blue',
			color: 'white',
			borderRadius: '15px',
			padding: '1px 8px 1px 8px'
		},
		customWidth: {
			maxWidth: 'none'
		},
		itemText: {
			display: 'grid'
		},
		dots: {
			color: 'blue',
			fontSize: '2rem'
		},
		title: {
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		}
	});
	let listRef = useRef(null);
	const [state, setState] = useState(0);
	useEffect(() => {
		let checker = listRef.current.scrollWidth > listRef.current.offsetWidth;
		setState(checker);
	}, []);
	const classes = styles();
	const amountOfComments = comments.filter(
		commentItem => id === commentItem.id
	).length;
	return (
		<li
			className={cn(classes.todoListItem, { active: id === active })}
			onClick={makeActive(id)}
		>
			<div className={classes.toDoItemWrap}>
				<div className={classes.commentText}>
					<span className={classes.innerTexts} ref={listRef}>
						{state ? (
							<Tooltip
								title={title}
								className={classes.customWidth}
							>
								<span className={classes.itemText}>
									<span className={classes.title}>
										{title}
									</span>
									<span className={classes.dots}>...</span>{' '}
								</span>
							</Tooltip>
						) : (
							<span>{title}</span>
						)}
					</span>
					{amountOfComments !== 0 ? (
						<span className={classes.commentCounter}>
							{amountOfComments}
						</span>
					) : null}
				</div>
				<Button
					variant="outlined"
					color="secondary"
					className={classes.deleteBtn}
					onClick={removeToDo(id)}
				>
					<Translate value="removeToDoItem" />
				</Button>
			</div>
		</li>
	);
};

const mapStateToProps = state => ({
	comments: state.comments.commentsArray,
	active: state.toDoList.active,
	newToDoId: state.toDoList.newToDoId
});

const mapDispatchToProps = dispatch => ({
	activateToDo: id => {
		dispatch(activateToDo(id));
	},
	rmToDo: (list, id) => {
		dispatch(deleteToDo(list));
		dispatch(filterComments(id));
	}
});
ListElement.propTypes = {
	activateToDo: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	active: PropTypes.number.isRequired,
	comments: PropTypes.array.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(ListElement);
