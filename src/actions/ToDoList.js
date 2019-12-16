import {
	ACTIVATE_TODO,
	DELETE_TODO,
	ADD_TODO,
	GET_INDEX
} from '../reducers/toDoListReducer';

export const addToDo = (todo, key, time) => (dispatch, getState) => {
	dispatch({
		type: ADD_TODO,
		payload: {
			title: todo,
			id: key,
			comments: [],
			createAt: time
		}
	});
};

export const setIndex = () => dispatch => {
	dispatch({
		type: GET_INDEX
	});
};

export const activateToDo = id => (dispatch, getState) => {
	dispatch({
		type: ACTIVATE_TODO,
		payload: id
	});
};

export const deleteToDo = (list, id) => (dispatch, getState) => {
	dispatch({
		type: DELETE_TODO,
		payload: { list, id }
	});
};
