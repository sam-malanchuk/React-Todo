import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <ul>
            {props.data.map(item => {
                return <Todo item={item} value={item.task} key={item.id} completed={item.completed} toggleCompleted={props.toggleCompleted} />;
            })}
        </ul>
    );
}

export default TodoList; 