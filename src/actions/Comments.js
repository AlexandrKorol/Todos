import { ADD_COMMENT, FILTER_COMMENTS } from '../reducers/commentsReducer';

export const addComment = comment => (dispatch, getState) => {
	dispatch({
		type: ADD_COMMENT,
		payload: comment
	});
};
export const filterComments = id => (dispatch, getState) => {
	dispatch({
		type: FILTER_COMMENTS,
		payload: id
	});
};
