import React, {useRef,useEffect} from 'react';
import cn from 'classnames';
import { Translate } from 'react-redux-i18n';
import { Button, makeStyles, Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';
const List = props => {
	const { toDoList, active, comments, activateToDo, rmToDo } = props;
	const makeActive = id => e => {
		activateToDo(id);
	};
	const removeToDo = id => e => {
		e.stopPropagation();
		let newList = toDoList.filter((item) => {
			return item.id !== id;
		});
		let filtered = newList.map((item,index)=>{
			return {...item, ownId: index}

		})
		console.log('Filtered list', filtered)
		rmToDo(filtered, id);
		if(newList.length > 0)
		activateToDo(filtered[filtered.length-1].id)
		
	};
	const styles = makeStyles({
		toDoListWrapper: {
			maxHeight: '80%',
			overflowY: 'scroll',
			overflowX: 'hidden'
		},
		todoList: {
			listStyle: 'none',
			margin: '0',
			paddingTop: '30px',
			padding: '0',
			
		},
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
			' &active':{
				display: 'flex',
				'&:before':{
					content: '" "',
  					position: 'static',
  					width: '4px',
  					height: 'auto',
  					background: 'green',
				},
				'& $toDoItemWrap':{
					borderBottom: '1px solid lightgrey'
				}
			},
			
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
			overflow: 'hidden'
		},
		commentCounter: {
			marginLeft: '5px',
			alignSelf: 'flex-start',
			marginRight: '10px',
			background: 'blue',
			color: 'white',
			borderRadius: '15px',
			padding: '1px 8px 1px 8px'
		}
	});
	const classes = styles();
	let listRef = useRef(null);
	useEffect(() => {
		console.log(listRef.current);
		return ()=>{
			listRef=0;
		}
	}, [listRef.current]);

	return (
		<div className={classes.toDoListWrapper}>
			<ul className={classes.todoList}>
				{toDoList && toDoList.length !== 0
					? toDoList.map(item => {
							return (
								<li
									key={item.id}
									className={
										item.id === active

											? classes.todoListItem +  'active'
											: classes.todoListItem
										
									}
									onClick={makeActive(item.id)}
								>
									<div className={classes.toDoItemWrap}>
										<div className={classes.commentText}>
											<span
												className={classes.innerTexts}
												ref={listRef}
											>
												{
													
													listRef.scrollWidth && listRef.scrollWidth > listRef.offsetWidth ? 
													<Tooltip title={item.title}>
														<span>1{item.title}</span>
													</Tooltip>:
													<span>{item.title}</span>
												}
											</span>
											{comments.filter(
												commentItem =>
													item.id === commentItem.id
											).length !== 0 ? (
												<span
													className={
														classes.commentCounter
													}
												>
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
											<Translate value="removeToDoItem" />
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

List.propTypes = {
	activateToDo: PropTypes.func.isRequired,
	rmToDo: PropTypes.func.isRequired,
	toDoList: PropTypes.array.isRequired,
	comments: PropTypes.array.isRequired,
	active: PropTypes.number
};

export default List;
