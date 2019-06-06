import React from 'react';

function Todo(props) {
    const clickHandler = () => {
        props.toggleCompleted(props.item.id)
    }
    return (
        <li className={`${props.item.completed ? "checked" : ""}`} onClick={clickHandler} >{props.item.task}</li>
    );
}

export default Todo; 