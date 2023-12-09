import React,{useState,useEffect} from 'react'
import classes from "./TodoApp.module.css"
import TodoList from '../TodoList/TodoList';
// import classes from './TodoApp.module.css'
import Form from '../Form/Form';
import {v4 as uuid} from 'uuid';

const TodoApp = () => {

    const initialTodos=JSON.parse(window.localStorage.getItem('todos')||'[]');
  
//    const initialTodos=[
//     {
//         id:'31567',
//         task:'Go to gym',
//         completed:false
//     }
//     ,
//     {
//         id:'3767',
//         task:'watch movie',
//         completed:true
//     },
//     {
//         id:'31757',
//         task:'Learn React',
//         completed:false
//     },
//    ]

//    useEffect(()=>{
//     console.log('use effect')
//    })

// useEffect(()=>{
//     console.log('use effect')
//    },[])
   
   const [todos,setTodos]=useState(initialTodos);
   
   const addTodo=(newTodoText)=>{
    setTodos((prevState)=>{
        return [...prevState,{id:uuid(),task:newTodoText,completed:false}]
    })
   }
    
   const deleteTodo=(todoID)=>{
    setTodos((prevState)=>{
        return prevState.filter((todo)=>todo.id!==todoID);
    })
   }

   const markTodoCompleted = (todoId) => {
    setTodos((prevState) => {
      return prevState.map((todo) => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);
      })
  }

  useEffect(()=>{
    window.localStorage.setItem('todos',JSON.stringify(todos));
   },[todos])

  return (

   <section className={classes['todo-app']}>
       
       <Form addTodo={addTodo}/>
   <TodoList todos={todos}  deleteTodo={deleteTodo} markTodoCompleted={markTodoCompleted} />
   </section>
  )
}

export default TodoApp;