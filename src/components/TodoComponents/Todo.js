import React from 'react';

function Todo(props) {
    const clickHandler = () => {
        props.toggleCompleted(props.item.key)
    }
    return (
        <li className={`${props.item.completed ? "checked" : ""}`} onClick={clickHandler} >{props.value}</li>
    );
}

export default Todo; 