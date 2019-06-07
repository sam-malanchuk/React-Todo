import React from 'react';

function TodoForm(props) {
    const innerSubmitHandler = event => {
        event.preventDefault();
        const inputField = document.getElementById("toDoListInput");
        if(inputField.value !== "") {
            props.passSubmitHandler(event);
            inputField.value = "";
        }
    }
    return (
    <form onSubmit={innerSubmitHandler}>
        <input id="toDoListInput" type="text" name="task" onChange={props.passChangeHandler} placeholder="Enter Task.." />
        <button type="submit">Add To-do</button>
        <button type="button" onClick={props.passClearHandler}>Clear Completed</button>
    </form>
    );
}

export default TodoForm; 