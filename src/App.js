import React, { useState ,useEffect} from "react";
import "./App.css";

import Form from './Components/Form'
import ToDo from './Components/ToDo'
function App(){

    const[inputText,setInputText]=useState("");
    const[todos,setTodos]=useState([]);
    const[status,setStatus]=useState('all');
    const[filterTodos,setFilterTodos]=useState([]);
    useEffect(()=>filterHandler,[todos,status])

    const filterHandler=()=>{
        switch(status){
            case "completed":
                setFilterTodos(todos.filter(todo=>todo.completed===true));
                break;
            case "uncompleted":
                setFilterTodos(todos.filter(todo=>todo.completed===false));
                break;
            default:
                setFilterTodos(todos);
        }
    }
    return(
        <div className='App'>
            <header>
                Et's ToDo List
            </header>
            <Form inputText={inputText} 
                  todos={todos} 
                  setTodos={setTodos} 
                  setInputText={setInputText}
                  setStatus={setStatus}
                  />
            <ToDo todos={todos}
                  filterTodos={filterTodos}
                  setTodos={setTodos}/>
        </div>
    );
}
export default App;
