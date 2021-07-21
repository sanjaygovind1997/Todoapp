import { useState } from 'react';
import './Todo.css';
import Items from './Items';

export default function Todo(){

    const [state,setState] = useState({input:'',items: []});
    
    //Four essential methods - input handling,add to list,edit and delete from list
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

    const editItem = (index,value) => {
        const {input,items} = state;
        items.splice(index,1,value);

        setState({
            items: items,
            input:input
        });
    }

        const allProps = {
            deleteItem:deleteItem,
            editItem:editItem,
            items:state.items
        }
        return (
            <div className="todo-container">
                <form onSubmit={addItem} className="input-section">
                    <h1>Todo App</h1>
                    <input value={state.input} onChange={handleChange} type="text" placeholder="Enter Todo..." />
                </form>
                <Items {...allProps} />
            </div>
        )
    }