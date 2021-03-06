import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(props) {
    super();
    this.state = {
      toDoList: [
        {
          task: "Create new project",
          id: 1559698095471,
          completed: false
        },
        {
          task: "Working Call",
          id: 1559698131266,
          completed: false
        },
        {
          task: "Meet with Doctor",
          id: 1559698132820,
          completed: false
        }
      ],
      toDoItem: ""
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  submitHandler = event => {
    const newItem = {
      task: this.state.toDoItem,
      id: + new Date(),
      completed: false
    }
    this.setState({toDoList: [...this.state.toDoList, newItem]});
  }
  changeHandler = event => {
    this.setState({toDoItem: event.target.value});
  }
  toggleCompleted = id => {
    const newList = this.state.toDoList.map(listItem => {
      if(listItem.id === id) {
        const newObj = {
          ...listItem,
          completed: !listItem.completed
        };
        return newObj;
        } else {
          return listItem;
        }
      }
    );
    this.setState({toDoList: newList });
  }
  clearHandler = event => {
    console.log("clicked");
    const newList = this.state.toDoList.filter(listItem => {
      return !listItem.completed;
    });
    this.setState({toDoList: newList });
  }
  render() {
    return (
      <div>
          <h2>My To-Do</h2>
        <TodoList data={this.state.toDoList} toggleCompleted={this.toggleCompleted} /> 
        <TodoForm passClearHandler={this.clearHandler} passChangeHandler={this.changeHandler} passSubmitHandler={this.submitHandler}/>
      </div>
    );
  }
}

export default App;
