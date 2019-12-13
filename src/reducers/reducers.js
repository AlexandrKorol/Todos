const initialState={
    locale: "en",
    itemList: [

    ],
    comments:[],
    active: null,
    newToDoId:0,
    commentId:0,
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case "ADD_TODO":
            return{
                ...state,
                itemList:[...state.itemList, action.payload]
            }
        case "GET_INDEX":
            return{
                ...state,
                newToDoId: state.newToDoId + 1
            }
        case "ACTIVATE_TODO":
            return{
                ...state,
                active: action.payload
            }
        case "DELETE_TODO":
            let result = state.comments.filter(item=>item.id !== action.payload2)
            return{
                ...state,
                itemList: action.payload,
                comments: result,
                active: null
            }
        case "ADD_COMMENT":
            return{
                ...state,
                comments: [...state.comments, action.payload],
                commentId: state.commentId + 1
            }
        default: return state
    }
    return state;
}
export default reducer;