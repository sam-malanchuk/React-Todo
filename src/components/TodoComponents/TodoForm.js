import React from 'react';

function TodoForm(props) {
    return (
    <form onSubmit={props.passSubmitHandler}>
        <input type="text" name="task" onChange={props.passChangeHandler} placeholder="Enter Task.." />
        <button>Add To-do</button>
        <button>Clear Completed</button>
    </form>
    );
}

export default TodoForm; 