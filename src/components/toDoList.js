import React from 'react';
import {Translate} from 'react-redux-i18n';
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
const List = (props)=>{
    
    
    
    const makeActive=(id)=>(e)=>{
        const {activateToDo}=props;
        activateToDo(id);
    }
    const removeToDo=(id)=>(e)=>{
        e.stopPropagation();
        let newList = props.list.filter(item=>{
            return item.id !== id
        });
        const {deleteToDo}=props;
        deleteToDo(newList, id);
    }
    return(
        
            <div className="toDoListWrapper">
                <ul className="todoList">
                {
                    props.list && props.list.length !==0 ? props.list.map(item=>{
                    return(<li key={item.id} className ={item.id === props.active ? 
                                            "todoListItem active": "todoListItem"} onClick={makeActive(item.id)}>
                                            <div className = 'toDoItemWrap'>
                                        <div className="commentText"><span className='innerTexts'>{item.title} </span>
                                        {
                            props.comments.filter((commentItem)=>item.id === commentItem.id).length !== 0 ?
                            <span className="commentCounter">{props.comments.filter((commentItem)=>item.id === commentItem.id).length}</span> : null
                    }
                        
                    </div>
                    
                    <Button variant="outlined" color="secondary"classes={{root:'deleteBtn'}} onClick={removeToDo(item.id)}><Translate value='removeToDoItem'/> </Button></div></li>)
                    }) :
                    null
                }
                
                </ul>
            </div>
        

            
    )
}


const mapStateToProps = (state) => {
    return{
        list: state.todoState.itemList,
        comments: state.todoState.comments,
        active: state.todoState.active
    }
}
const mapDispatchToProps = (dispatch)=>({
    activateToDo: (id)=>{
        dispatch({
            type: "ACTIVATE_TODO",
            payload: id
        })
    },
    deleteToDo: (list, id)=>{
        dispatch({
            type:"DELETE_TODO",
            payload: list,
            payload2: id
        })
    }
})



export default connect(mapStateToProps ,mapDispatchToProps)(List);