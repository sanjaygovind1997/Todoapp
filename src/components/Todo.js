import React, { Component } from 'react';
import './Todo.css';

export default class Todo
 extends Component {

    constructor(props){
        super(props);
        this.state={
            input:'',
            items:[]
        };
    } 
    
    handleChange = event =>{
        this.setState({
            input:event.target.value
        });
    }

    addItem = (event) => {
        event.preventDefault();
        const {input} = this.state;

        this.setState({
            items:[...this.state.items,input],
            input:''
        });
    }

    deleteItem = (key) => {
        this.setState({
            //items:this.state.items.filter((item,index) => key!==index)
        });
    }

    render() {
        const {input,items} = this.state;
        return (
            <div className="todo-container">
                <form onSubmit={this.addItem} className="input-section">
                    <h1>Todo App</h1>
                    <input value={input} onChange={this.handleChange} type="text" placeholder="Enter Todo..." />
                </form>
                <ul>
                    {
                        items.map((item,index) => (
                            <li key={index}>
                                {item}
                                <i onClick={() => this.deleteItem(index)} className="fas fa-trash-alt"></i>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
