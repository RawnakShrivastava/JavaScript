import React , { useState } from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import '../Expenses/ExpenseItem.css';

const ExpenseItem = (props) => {

    const [title,setTitle] = useState(props.title);
    const [updateName,setUpdateName] = useState('');

    const clickHandler = () => {
        if(updateName !== ''){
            setTitle(updateName);
        }
        setTitle("Updated..");
        setUpdateName('');
    };
    const updateNameChange = (event) => {
        setUpdateName(event.target.value);
    };

    return (
        <Card className = "expense-item">
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className = "expense-item__description">
                <h2>{title}</h2>
                <div className = "expense-item__price">{props.amount}</div>
                <input className="updated-name" type="text" value = {updateName} onChange = {updateNameChange}></input>
            </div> 
            <button onClick= {clickHandler}>Change Title</button>
        </Card> 
    );
}

export default ExpenseItem;