import React, { useEffect, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import MonthlyChart from './MonthlyChart';
const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    
    const savedExpenses = localStorage.getItem('expenses');
    //console.log(savedExpenses);
    setExpenses(JSON.parse(savedExpenses));
    console.log(expenses);
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

  // const calculateMonthlyExpenses = (expenses) => {
  //   const monthlyExpenses = {};
  
  //   expenses.forEach((expense) => {
  //     const month = new Date(expense.date).toLocaleString('default', { month: 'short',year:'numeric'});
  //     //const year = selectedYear;
  //     console.log(month);
  //     if (!monthlyExpenses[month]) {
  //       monthlyExpenses[month] = 0;
  //     }
  //     monthlyExpenses[month] += Number(expense.amount);
  //   });
    
  //   console.log(monthlyExpenses);
  //   const allMonths = [
  //     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  //     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  //   ];
  
  //   return allMonths.map((month) => ({
  //     name: month,
  //     uv: monthlyExpenses[month] || 0,
  //   }));
  // };


  return (
    <div>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses = {expenses} setExpenses = {setExpenses}/> 
    </div>
  );
};

export default ExpenseTracker;