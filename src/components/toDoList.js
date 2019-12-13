import React from 'react';
import cn from 'classnames';
import { Translate } from 'react-redux-i18n';
import { connect } from 'react-redux';
import {Button, makeStyles} from '@material-ui/core';
const List = props => {
	const {list, active, comments } = props;
	const makeActive = id => e => {
		const { activateToDo } = props;
		activateToDo(id);
	};
	const removeToDo = id => e => {
		e.stopPropagation();
		let newList = props.list.filter(item => {
			return item.id !== id;
		});
		const { deleteToDo } = props;
		deleteToDo(newList, id);
	};
	const styles=makeStyles({
		toDoListWrapper:{
			maxHeight: '80%',
			overflowY: 'scroll', 
			overflowX: 'hidden',
		},
		todoList:{
			listStyle: 'none',
			margin:'0',
			paddingTop:'30px',
			padding: '0',
			
			},
		toDoItemWrap:{
			justifyContent: 'space-between',
			overflow: 'hidden',
			display: 'flex',
			width: '100%',
			marginLeft: '30px',
			paddingBottom: '10px',
			paddingTop: '10px',
		},
		todoListItem:{
			display: 'flex',
			justifyContent: 'space-between',
			cursor: 'pointer',
			
		},
		active:{
			'&before':{
				content: ' ',
				position: 'static',
				width: '4px',
				height: 'auto',
				background: 'green',
		}},
		commentText:{
			width: '85%',
			display:'flex',
			justifyItems: 'center',
			alignSelf: 'center',
			overflow: 'hidden',
		},
		innerTexts:{
			textOverflow: 'ellipsis',
			maxWidth: '94%',
			overflow: 'hidden',
		},
		commentCounter:{
			marginLeft: '5px',
			alignSelf: 'flex-start',
			marginRight: '10px',
			background: 'blue',
			color: 'white',
			borderRadius: '15px',
			padding: '1px 8px 1px 8px',
		},
	})
	const classes = styles();
	
	return (
		<div className={classes.toDoListWrapper}>
			<ul className={classes.todoList}>
				{list && list.length !== 0
					? list.map(item => {
							return (
								<li
									key={item.id}
									className={
										item.id === active
											? 'todoListItem active'
											: classes.todoListItem
									}
									
									onClick={makeActive(item.id)}
								>
									<div className={classes.toDoItemWrap}>
										<div className={classes.commentText}>
											<span className={classes.innerTexts}>
												{item.title}{' '}
											</span>
											{comments.filter(
												commentItem =>
													item.id === commentItem.id
											).length !== 0 ? (
												<span className={classes.commentCounter}>
													{
														props.comments.filter(
															commentItem =>
																item.id ===
																commentItem.id
														).length
													}
												</span>
											) : null}
										</div>

										<Button
											variant="outlined"
											color="secondary"
											classes={{ root: 'deleteBtn' }}
											onClick={removeToDo(item.id)}
										>
											<Translate value="removeToDoItem" />{' '}
										</Button>
									</div>
								</li>
							);
					  })
					: null}
			</ul>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		list: state.todoState.itemList,
		comments: state.todoState.comments,
		active: state.todoState.active
	};
};
const mapDispatchToProps = dispatch => ({
	activateToDo: id => {
		dispatch({
			type: 'ACTIVATE_TODO',
			payload: id
		});
	},
	deleteToDo: (list, id) => {
		dispatch({
			type: 'DELETE_TODO',
			payload: list,
			payload2: id
		});
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
