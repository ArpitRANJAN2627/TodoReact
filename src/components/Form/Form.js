import React,{useRef} from 'react'
import classes from './Form.module.css'

const Form = (props) => {

    const todoInRef=useRef();

    const formSubmitHandler=(event)=>{
        event.preventDefault();
        // console.log(todoInRef.current.value)
        if(todoInRef.current.value!='')
      props.addTodo(todoInRef.current.value);
        todoInRef.current.value="";
    }

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
        <div className={classes['form-control']} >
            <label htmlFor='todo-inp' >Add Todos</label>
            <input type='text' placeholder='Add new todos' id='todo-inp' ref={todoInRef} />
        </div>
        <button className={classes['form-btn']} > Add</button>
    </form>
  )
}

export default Form