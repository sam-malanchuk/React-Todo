import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <ul>
            {props.data.map(item => {
                return <Todo value={item.task} key={item.id} completed={item.completed} />;
            })}
        </ul>
    );
}

export default TodoList; 