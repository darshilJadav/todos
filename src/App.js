import React, { Component } from 'react';
import Todo from './Todo'
import AddTodo from './AddTodo';

class App extends Component {
  state={
    todos:[
      {content:'make coffee', id:1},
      {content:'create Linkein profile', id:2},
      {content:'go for a walk', id:3},
      {content:'feed the cats', id:4},
    ]
  }
  deleteTodo=(id)=>{
    console.log(id)

    let tempTodosState=this.state.todos.filter(
      todos=>{
        return todos.id !==id;
      }
    );

    this.setState({
      todos:tempTodosState
    })
  }
  addTodo=(todo)=>{
    console.log(todo);
    todo.id= Math.random()
    let todos = [...this.state.todos,todo]
    this.setState({
      todos
    })
  }

  render(){
    console.log(this.state.todos)
    return(
      <div className='todo-app container'>
        <h1 className='center blue-text'>ToDo's</h1>
        <Todo deleteTodo={this.deleteTodo} todos={this.state.todos}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App;