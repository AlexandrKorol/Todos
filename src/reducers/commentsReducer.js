export const ADD_COMMENT = 'ADD_COMMENT';
export const FILTER_COMMENTS = 'FILTER_COMMENTS';
const initialState = {
	commentsArray: [],
	commentId: 0
};

export const commentsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_COMMENT: {
			return {
				...state,
				commentsArray: [...state.commentsArray, payload],
				commentId: state.commentId + 1
			};
		}
		case FILTER_COMMENTS: {
			let result = state.commentsArray.filter(
				item => item.id !== payload
			);
			return {
				...state,
				commentsArray: result
			};
		}
		default: {
			return state;
		}
	}
};
