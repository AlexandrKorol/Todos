<<<<<<< HEAD
import React, { useState } from "react";
import { Translate } from "react-redux-i18n";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const List = props => {
  const useStyles = makeStyles(theme => ({
    popover: {
      pointerEvents: "none"
    },
    paper: {
      padding: theme.spacing(1)
    }
  }));

  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handlePopoverOpen = (event, id) => {
    popID = id;
    setAnchorEl(event.target);
  };

  const handlePopoverClose = () => {
    popID = null;
    setAnchorEl(null);
  };

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
  const open = Boolean(anchorEl);
  let popID = null;
  return (
    <div className="toDoListWrapper">
      <ul className="todoList">
        {props.list && props.list.length !== 0
          ? props.list.map(item => {
              return (
                <li
                  key={item.id}
                  className={
                    item.id === props.active
                      ? "todoListItem active"
                      : "todoListItem"
                  }
                  onClick={makeActive(item.id)}
                >
                  <div className="toDoItemWrap">
                    <Tooltip title={item.title}>
                      <Typography classes={{root:'toDoItemTextArea'}}>
                        {item.title}
                        {props.comments.filter(
                          commentItem => item.id === commentItem.id
                        ).length !== 0 ? (
                          <span className="commentCounter">
                            {
                              props.comments.filter(
                                commentItem => item.id === commentItem.id
                              ).length
                            }
                          </span>
                        ) : null}
                      </Typography>
                    </Tooltip>
                    <Button
                      variant="outlined"
                      color="secondary"
                      classes={{ root: "deleteBtn" }}
                      onClick={removeToDo(item.id)}
                    >
                      <Translate value="removeToDoItem" />{" "}
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
      type: "ACTIVATE_TODO",
      payload: id
    });
  },
  deleteToDo: (list, id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: list,
      payload2: id
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
=======
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
>>>>>>> dev
