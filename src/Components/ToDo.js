import React from 'react';
import ToD from './ToD';

const ToDo=({filterTodos,setTodos,todos})=>{
    return(
        <div className='todo-container'>
            <ul className='todo-list'>
               {filterTodos.map(todo=>(
                   <ToD key={todo.id} 
                    text={todo.text}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    />
               ))}
            </ul>
        </div>
    );
}
export default ToDo;