import React from 'react';
import { makeStyles } from '@material-ui/core';
import ListElement from './ToDoListElement';
import PropTypes from 'prop-types';
const List = props => {
	const { toDoList } = props;
	
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
		
	});
	const classes = styles();
	
	return (
		<div className={classes.toDoListWrapper}>
			<ul className={classes.todoList}>
				{toDoList && toDoList.length !== 0
					? toDoList.map(item => {
							return (
								<ListElement key = {item.id} 
									id={item.id}
									title={item.title}
									>
									
								</ListElement>
							);
					  })
					: null}
			</ul>
		</div>
	);
};

List.propTypes = {
	
	toDoList: PropTypes.array.isRequired,
	comments: PropTypes.array.isRequired,
	active: PropTypes.number,
};

export default List;
