import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const toDoList= [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(props) {
    super();
    this.state = {
      toDoList: toDoList,
      toDoItem: ""
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  submitHandler = event => {
    event.preventDefault();
    const newItem = {
      task: this.state.toDoItem,
      id: + new Date(),
      completed: false
    }
    this.setState({toDoList: [...this.state.toDoList, newItem]});
    event.target.value = "";
  }
  changeHandler = event => {
    this.setState({toDoItem: event.target.value});
  }
  render() {
    return (
      <div>
          <h2>Welcome to your Todo App!</h2>
        <TodoList data={this.state.toDoList} /> 
        <TodoForm passChangeHandler={this.changeHandler} passSubmitHandler={this.submitHandler}/>
      </div>
    );
  }
}

export default App;
