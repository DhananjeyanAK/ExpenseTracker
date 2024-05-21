import React, { useEffect, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import MonthlyChart from './MonthlyChart';
const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    
    const savedExpenses = localStorage.getItem('expenses');
    setExpenses(JSON.parse(savedExpenses));
  }, []);

  // Save expenses to localStorage
  useEffect(() => {
    if(expenses){
      localStorage.setItem('expenses', JSON.stringify(expenses));
    }
  }, [expenses]);

  const addExpense = (expense) => {
    
    setExpenses([...expenses, expense]);
  };
  return (
    <div>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses = {expenses} setExpenses = {setExpenses}/> 
    </div>
  );
};

export default ExpenseTracker;