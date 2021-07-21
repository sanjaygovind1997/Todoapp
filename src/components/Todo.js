import { useState } from 'react';
import './Todo.css';

export default function Todo(){

    const [state,setState] = useState({input:'',items: []});
    
    const handleChange = event =>{
        const {items} = state;
        setState({
            input:event.target.value,
            items:items
        });
    }

    const addItem = event => {
        event.preventDefault();
        const {input} = state;

        setState({
            items:[...state.items,input],
            input:''
        });
    }

    const deleteItem = key => {
        const {input} = state;
        setState({
            items:state.items.filter((item,index) => key!==index),
            input:input
        });
    }

    const editItem = (index,event) => {
        const {input,items} = state;
        items.splice(index,1,event.target.value);

        setState({
            items: items,
            input:input
        });
    }
        const {input,items} = state;
        return (
            <div className="todo-container">
                <form onSubmit={addItem} className="input-section">
                    <h1>Todo App</h1>
                    <input value={input} onChange={handleChange} type="text" placeholder="Enter Todo..." />
                </form>
                <ul>
                    {
                        items.map((item,index) => (
                            <li key={index}>
                                <input value={item} onChange={(event)=>editItem(index,event)} />
                                <i onClick={() => deleteItem(index)} className="fas fa-trash-alt"></i>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }