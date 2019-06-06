import React from 'react';

function TodoForm(props) {
    const innerSubmitHandler = event => {
        props.passSubmitHandler(event);
        document.getElementById("toDoListInput").value = "";
    }
    return (
    <form onSubmit={innerSubmitHandler}>
        <input id="toDoListInput" type="text" name="task" onChange={props.passChangeHandler} placeholder="Enter Task.." />
        <button type="submit">Add To-do</button>
        <button type="button">Clear Completed</button>
    </form>
    );
}

export default TodoForm; 