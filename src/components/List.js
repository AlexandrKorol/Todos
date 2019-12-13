import React from 'react';
import {Translate} from 'react-redux-i18n';
import Paper from '@material-ui/core/Paper';
import ToDoList from "./toDoList";
import InputField from './InputField';
const List = ()=>{
    return(
        
            <div className="itemlist">
                <Paper className="list"> 
                    <div className="toDoListHeader">
                        <h2><Translate value='toDoItems'/> </h2>
                        <InputField />
                    </div>
                    <ToDoList />
                    
                </Paper>
            </div>
        
    )
}

export default List;