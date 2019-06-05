import React from 'react';

function TodoForm(props) {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    return (
    <form onSubmit={props.passSubmitHandler}>
        <input type="text" name="task" onChange={props.passChangeHandler} placeholder="Enter Task.." />
        <button>Add To-do</button>
        <button>Clear Completed</button>
    </form>
    );
}

export default TodoForm; 