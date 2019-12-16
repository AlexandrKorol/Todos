export const ADD_TODO = 'ADD_TODO';
export const GET_INDEX = 'GET_INDEX';
export const ACTIVATE_TODO = 'ACTIVATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const initialState = {
	itemList: [],
	active: null,
	newToDoId: 0
};

export const toDoListReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_TODO: {
			return {
				...state,
				itemList: [...state.itemList, payload]
			};
		}
		case GET_INDEX: {
			return {
				...state,
				newToDoId: state.newToDoId + 1
			};
		}
		case ACTIVATE_TODO: {
			return {
				...state,
				active: payload
			};
		}
		case DELETE_TODO: {
			return {
				...state,
				itemList: payload.list,
				active: null
			};
		}
		default: {
			return state;
		}
	}
};
