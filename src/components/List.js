<<<<<<< HEAD
import React from "react";
import { Translate } from "react-redux-i18n";
import Paper from "@material-ui/core/Paper";
import ToDoList from "./toDoList";
import InputField from "./InputField";
const List = () => {
  return (
    <div className="itemlist">
      <Paper className="list">
        <div className="toDoListHeader">
          <h2>
            <Translate value="toDoItems" />{" "}
          </h2>
          <InputField />
        </div>
        <ToDoList />
      </Paper>
    </div>
  );
};

export default List;
=======
import React from 'react';
import { Translate } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import { Paper, makeStyles } from '@material-ui/core';
import {
	addToDo,
	setIndex,
	activateToDo
} from '../actions/ToDoList';
import { connect } from 'react-redux';
import ToDoList from './toDoList';
import InputField from './InputField';
const List = props => {
	const {
		toDoList,
		index,
		addToDo,
		setIndex,
		comments,
		active,
		rmToDo,
		activateToDo,
		newToDoId
	} = props;
	const styles = makeStyles({
		itemList: {
			padding: '20px 20px 0 20px',
			display: 'flex',
			flexDirection: 'column'
		},
		list: {
			display: 'flex',
			flexDirection: 'column',
			overflowY: 'scroll',
			height: '70vh',
			padding: '30px 30px 30px 0'
		},
		toDoListHeader: {
			paddingLeft: '30px'
		},
		'@media(max-width:768px)':{
			list:{
				minHeight: '100vh'
			}
		}
	});
	const classes = styles();
	return (
		<div className={classes.itemList}>
			<Paper className={classes.list}>
				<div className={classes.toDoListHeader}>
					<h2>
						<Translate value="toDoItems" />
					</h2>
					<InputField
						index={index}
						addToDo={addToDo}
						setIndex={setIndex}
					/>
				</div>
				<ToDoList
					toDoList={toDoList}
					comments={comments}
					active={active}
					activateToDo={activateToDo}
					rmToDo={rmToDo}
					newToDoId={newToDoId}
				/>
			</Paper>
		</div>
	);
};
const mapStateToProps = state => ({
	toDoList: state.toDoList.itemList,
	comments: state.comments.commentsArray,
	index: state.toDoList.newToDoId,
	active: state.toDoList.active,
	newToDoId: state.toDoList.newToDoId
});

const mapDispatchToProps = dispatch => ({
	addToDo: (todo, key, time) => {
		dispatch(addToDo(todo, key, time));
		dispatch(activateToDo(key));
	},
	setIndex: () => {
		dispatch(setIndex());
	},
	
});

List.propTypes = {
	addToDo: PropTypes.func.isRequired,
	setIndex: PropTypes.func.isRequired,
	toDoList: PropTypes.array.isRequired,
	index: PropTypes.number.isRequired,
	active: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
>>>>>>> dev
