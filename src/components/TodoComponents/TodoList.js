import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <ul>
            {props.data.map(item => {
                return <Todo item={item} key={item.id} toggleCompleted={props.toggleCompleted} />;
            })}
        </ul>
    );
}

export default TodoList; 