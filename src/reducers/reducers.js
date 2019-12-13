

const initialState = {
	locale: 'en',       //  TODO REMOVE
	itemList: [],
	comments: [],
	active: null,
	newToDoId: 0,
	commentId: 0,
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'ADD_TODO': {
			return {
				...state,
				itemList: [ ...state.itemList, payload ],
			};
		}
		case 'GET_INDEX': {
			return {
				...state,
				newToDoId: state.newToDoId + 1,
			};
		}
		case 'ACTIVATE_TODO': {
			return {
				...state,
				active: payload.id,
			};
		}
		case 'DELETE_TODO': {
			let result = state.comments.filter(item => item.id !== payload.id);
			return {
				...state,
				itemList: payload.item,
				comments: result,
				active: null,
			};
		}
		case 'ADD_COMMENT': {
			return {
				...state,
				comments: [ ...state.comments, payload ],
				commentId: state.commentId + 1,
			};
		}
		default: {
			return state;
		}
	}
};
export default reducer;
