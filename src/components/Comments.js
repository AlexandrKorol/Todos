import React, {useRef, useState} from 'react'
import {connect} from "react-redux";
import {Translate} from 'react-redux-i18n';
import {Paper, Button, Avatar, OutlinedInput, makeStyles} from '@material-ui/core';
import CommentList from './CommentList';
const Comments = props=>{
        const {postId,ownId, comments, active} = props;
        const inputRef = useRef(0);
        const [comment, setState] = useState(0);
        
        const setValue=(e)=>{
            setState(e.target.value);
        }
        const addComment = e =>{
            
            if(comment.length !== 0){
                props.addComment({
                            id: postId,
                            ownId: ownId,
                            body: comment
                });
                inputRef.current.firstChild.value = '';
            }
        }
        
    const styles= makeStyles({
        commentBlock:{
            padding: '20px 20px 0 20px',
            height: '100%',
        },
        comments:{
            padding: '30px',
            height: '100%',
            height: '82vh',
            display: 'flex',
            flexDirection: 'column',
        },
        commentsWrapper:{
            maxHeight: '75%',
            overflowY: 'scroll', 
            overflowX: 'hidden',
        },
        commentFieldWrapper:{
            marginTop: 'auto',
        },
        commentField:{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px',
        },
        textField:{
            width: '77%', 
        },
        btnWithLine:{
            alignSelf: 'flex-end',
            marginTop: '20px',
            display: 'flex',
        },
        lineForBtn:{
            alignSelf: 'center',
            width: '80%',
            height: '1px',
            background: 'lightgrey',
        },
        btn:{
            width: '20%',
        }

    })
    const classes = styles();
    return(
        
            <div className={classes.commentBlock}>
                <Paper className={classes.comments}>
                    <h2><Translate value='comments'/> 
                    {
                        postId !== null ? 
                        <span>#{postId + 1}</span>:
                        null
                    } </h2>

                    {
                        postId !== null ? 
                                <div className={classes.commentsWrapper}><CommentList comments={comments}active={active}/></div> : null
                    }
                    {
                        postId !== null ? 
                                <div className={classes.commentFieldWrapper}>
                                    <div className={classes.commentField}>
                                        <Avatar sizes="medium" variant="square" /> 
                                        <OutlinedInput multiline id="outlined-basic" variant="outlined" 
                                        className={classes.textField} size="small" onChange={setValue} ref={inputRef} rowsMax={3}/>
                                    </div>
                                    <div className={classes.btnWithLine}>
                                        <div className={classes.lineForBtn}></div>
                                        <Button variant="contained" color="primary" size="medium" className={classes.btn} onClick={addComment}>
                                            <Translate value='addNew'/> </Button>
                                    </div>
                                </div>: null
                    }
                </Paper>  
            </div>  
       
    )
}

const mapStateToProps = (state) => {
   return{
    postId: state.todoState.active,
    ownId: state.todoState.commentId,
    comments: state.todoState.comments,
    active: state.todoState.active
   }
}


const mapDispatchToProps = (dispatch)=> ({
    addComment: (comment)=>{
        dispatch({
            type: "ADD_COMMENT",
            payload: comment,
        })
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Comments);