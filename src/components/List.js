import React from 'react';
import {Translate} from 'react-redux-i18n';
import {Paper, makeStyles} from '@material-ui/core';
import ToDoList from "./toDoList";
import InputField from './InputField';
const List = ()=>{

    const styles=makeStyles({
        itemList:{
            padding: '20px 20px 0 20px',
            height: '70vh',
            display: 'flex',
            flexDirection: 'column',
        },
        list:{
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'scroll',
            height: '70vh',
            padding:'30px 30px 30px 0',
        },
        toDoListHeader:{
            paddingLeft:'30px',
        }
    })
    const classes = styles();
    return(
        
            <div className={classes.itemList}>
                <Paper className={classes.list}> 
                    <div className={classes.toDoListHeader}>
                        <h2><Translate value='toDoItems'/> </h2>
                        <InputField />
                    </div>
                    <ToDoList />
                    
                </Paper>
            </div>
        
    )
}

export default List;