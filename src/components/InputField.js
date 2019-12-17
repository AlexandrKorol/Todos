<<<<<<< HEAD
import React, { useState, useRef } from "react";

import { connect } from "react-redux";
import { Translate } from "react-redux-i18n";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";

const InputField = props => {
  const [inputValue, setState] = useState(0);
  const inputRef = useRef(0);
  const onChangeHandler = e => {

    setState(e.target.value);
  };

  const addToDoItem = e => {
    if (inputValue === "") {
      return null;
    } else {
      const { addToDo, setIndex, index } = props;
      const date = new Date();
      addToDo(inputValue, index, date);
      setState("");
      inputRef.current.firstChild.value = "";
      setIndex();
    }
  };
  return (
    <div className="inputField">
        <OutlinedInput
          label="Type name here"
          classes={{root:"textField"}}
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
      type: "ADD_TODO",
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
      type: "GET_INDEX"
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
=======
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import { OutlinedInput, Button, makeStyles } from '@material-ui/core';

const InputField = props => {
	const { addToDo, setIndex, index } = props;
	const [inputValue, setState] = useState('');
	const inputRef = useRef(0);
	const onChangeHandler = e => {
		setState(e.target.value);
	};

	const addToDoItem = e => {
		if (inputValue !== '') {
			const date = new Date();
			addToDo(inputValue, index, date);
			setIndex();
			setState('');
			inputRef.current.firstChild.value = '';
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
		},
		btn:{
			backgroundColor:'#6AC5FE!important'
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
					className={classes.btn}
				>
					<Translate value="addNew" />
				</Button>
			</div>
		</div>
	);
};

InputField.propTypes = {
	addToDo: PropTypes.func.isRequired,
	setIndex: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired
};

export default InputField;
>>>>>>> dev
