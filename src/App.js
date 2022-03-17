
import { Component } from 'react';
import './App.css';
import image from "./clipboard.jpeg"
import { ToDoList } from './ToDoList';

class App extends Component {
  render() {
    return(
      <div className='app'>
        <div className='container'>
          <img src={image} width="180px" alt="tasks"/>
        </div>
        <div className='container'>
          <h1>To Do</h1>
        </div>
        <ToDoList/>
      </div>
    )
  }
  
}
export default App;
