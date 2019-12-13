import React, {useState, useRef} from 'react';

import {connect} from 'react-redux';
import {Translate} from 'react-redux-i18n';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';


const InputField = (props)=>{
    const [inputValue, setState] = useState(0);
    const inputRef = useRef(0);
    const onChangeHandler=(e)=>{
        setState(e.target.value);
    }

    
    const addToDoItem=(e)=>{
        if(inputValue === "")
        {
            return null
        }
        else{
        const {addToDo, setIndex, index} = props;
        const date = new Date();
        addToDo(inputValue, index, date);
        setState('');
        inputRef.current.firstChild.value = '';
        setIndex();
        }
    }
    return(
        <div>
                
                <form  className = "inputField">
                <OutlinedInput label="Type name here" className="textField" onChange={onChangeHandler} ref={inputRef}/>
                <Button variant="contained" color="primary" size="medium"  onClick={addToDoItem}>
                    <Translate value='addNew'/>
                </Button>
                </form>
                
                
            </div>
    )
}



// class InputField extends React.Component{
    
//     state={
//         newItem:'',
        
//     }
//     onChangeHandler=(e)=>{
//         this.setState({
//             newItem:e.target.value
//         })
//     }
//     addToDoItem=(e)=>{
//         if(this.state.newItem === "")
//         {
//             return null
//         }
//         else{
//         const {addToDo, setIndex, index} = this.props;
//         const {newItem} = this.state;
//         const date = new Date();
//         addToDo(newItem, index, date);
//         this.setState({
//             newItem:''
//         })
//         setIndex();
//         }
//     }
    
//     render(){
//         return(
//             <div>
                
//                 <form  className = "inputField">
//                 <OutlinedInput label="Type name here" className="textField" onChange={this.onChangeHandler} />
//                 <Button variant="contained" color="primary" size="medium" className="btn" onClick={this.addToDoItem}>
//                     <Translate value='addNew'/>
//                 </Button>
//                 </form>
                
                
//             </div>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return{
        toDoList: state.todoState.itemList,
        index: state.todoState.newToDoId     
    }
}

const mapDispatchToProps =(dispatch)=> ({
    addToDo: (todo, key, time)=>{
        dispatch({
            type: "ADD_TODO",
            payload: {
                title: todo,
                id:key,
                comments:[],
                createAt: time
            }
        })
    },
    setIndex: ()=>{
        dispatch({
            type: "GET_INDEX"
        })
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(InputField);