import { Component } from 'react';
import check from './check.jpeg'

export class ToDoList extends Component {


    state = {
        userInput: "",
        ToDoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addTask(input) {
        if (input === '') {
            alert('Please enter your task')
        } else {
            let listArray = this.state.ToDoList;
            listArray.push(input);
            this.setState({ToDoList: listArray, userInput: ''})
        }
    }


    deleteTask(){
        let listArray = this.state.ToDoList;
        listArray = [];
        this.setState({ToDoList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle("crossed");
    }

    onFormSubmit(e) {
        e.preventDefault()
    }


    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className='container'>
                        <input type="text"
                        placeholder='Enter your task'
                        onChange = {(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}/>
                    </div>
                    <div className='container'>
                        <button onClick={() => this.addTask(this.state.userInput)} className='btn add'>Add</button>
                    </div>
                    <ul>
                        {this.state.ToDoList.map((item, index) => (
                            <li onClick={this.crossedWord} key={index}>
                                <img src={check} alt="icon" width="25px"/>{item}
                            </li>
                        ))}
                    </ul>

                    <div className='container'>
                        <button onClick={() => this.deleteTask()} className="btn delete">Delete</button>
                    </div>

                </form>
            </div>
        )
    }

}