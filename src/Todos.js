import React from 'react';

let styleClose = {
    cursor : 'pointer'
}
const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                    <span><i className="material-icons right red-text" onClick={() => {deleteTodo(todo.id)}} style={styleClose}>close</i></span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left, Yay!!</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
        
    )
}

export default Todos;