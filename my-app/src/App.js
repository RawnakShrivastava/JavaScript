import './App.css';
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = (props) => {
  const expensesArr = [
    {
      key: 'e21',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      key: 'e22',
      title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) 
    },
    {
      key: 'e13',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      key: 'e12',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

    const [expenses,setExpenses] = useState(expensesArr);
    const addExpenseHandler = (expense) => {
      expensesArr.push(expense)
      // setExpenses([...expensesArr,expense]);
      setExpenses([...expensesArr]);
    }
    console.log(expenses);
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      <Expenses item = {expenses}></Expenses>
    </div>
  );
}

export default App;
