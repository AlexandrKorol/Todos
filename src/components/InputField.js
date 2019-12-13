import React, { useState, useRef } from 'react';

import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { OutlinedInput, Button, makeStyles } from '@material-ui/core';

const InputField = props => {
	const [inputValue, setState] = useState(0);
	const inputRef = useRef(0);
	const onChangeHandler = e => {
		setState(e.target.value);
	};

	const addToDoItem = e => {
		if (inputValue !== '') {
			const { addToDo, setIndex, index } = props;
			const date = new Date();
			addToDo(inputValue, index, date);
			setState('');
			inputRef.current.firstChild.value = '';
			setIndex();
		}
	};
	const styles = makeStyles({
		inputField: {
			paddingTop: '20px',
			paddingBottom: '10px',
			display: 'flex',
			justifyContent: 'space-between'
		},
		textField: {
			width: '77%'
		},
		input: {
			padding: '9.5px 14px!important'
		}
	});
	const classes = styles();
	return (
		<div>
			<div className={classes.inputField}>
				<OutlinedInput
					label="Type name here"
					className={classes.textField}
					classes={{ input: classes.input }}
					onChange={onChangeHandler}
					ref={inputRef}
				/>
				<Button
					variant="contained"
					color="primary"
					size="medium"
					onClick={addToDoItem}
				>
					<Translate value="addNew" />
				</Button>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		toDoList: state.todoState.itemList,
		index: state.todoState.newToDoId
	};
};

const mapDispatchToProps = dispatch => ({
	addToDo: (todo, key, time) => {
		dispatch({
			type: 'ADD_TODO',
			payload: {
				title: todo,
				id: key,
				comments: [],
				createAt: time
			}
		});
	},
	setIndex: () => {
		dispatch({
			type: 'GET_INDEX'
		});
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
