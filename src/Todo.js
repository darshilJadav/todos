import React from "react";

const Todo = ({todos,deleteTodo}) =>{
    // console.log('todo in the child', todos);

    const todoList = todos.length ? (

        todos.map(todo=>{
            return(
                <div className="center collection-item" key={todo.id} onClick={()=>{deleteTodo(todo.id)}}>
                    <span>
                        {todo.content}
                    </span>
                </div>
            )
        })

    ):(
        <div>
            there is nothing to do  ! 
        </div>
    )

    return(
        <div className="collection">
            {todoList}
        </div>
    )
} 

export default Todo