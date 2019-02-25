import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './addTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Milk'},
      {id: 2, content: 'Bred'},
      {id: 3, content: 'Juice'},
      {id: 4, content: 'Peanuts'},
      {id: 5, content: 'Paneer'}
    ]
  }

  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter( todo => {
      return todo.id !== id
    });
    this.setState({
      todos : todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos : todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
