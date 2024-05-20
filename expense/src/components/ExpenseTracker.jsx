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

  const calculateMonthlyExpenses = (expenses) => {
    const monthlyExpenses = {};

    expenses.forEach((expense) => {
        const monthYear = new Date(expense.date).toLocaleString('default', { month: 'short', year: 'numeric' });
        
        if (!monthlyExpenses[monthYear]) {
            monthlyExpenses[monthYear] = 0;
        }
        monthlyExpenses[monthYear] += Number(expense.amount);
    });

    console.log(monthlyExpenses);
    
    // Extract all unique month-year keys
    const allMonthYears = Object.keys(monthlyExpenses).sort((a, b) => {
        const [aMonth, aYear] = a.split(' ');
        const [bMonth, bYear] = b.split(' ');
        const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return aYear - bYear || monthOrder.indexOf(aMonth) - monthOrder.indexOf(bMonth);
    });

    return allMonthYears.map((monthYear) => ({
        name: monthYear,
        uv: monthlyExpenses[monthYear] || 0,
    }));
};


  return (
    <div>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses = {expenses} setExpenses = {setExpenses} data = {calculateMonthlyExpenses(expenses)}/> 
    </div>
  );
};

export default ExpenseTracker;