import { useEffect, useState } from "react";
import ExpenseCard from "./ExpenseCard";
import MonthlyChart from "./MonthlyChart";
import Filter from "./Filter";
const ExpenseList = ({expenses,setExpenses,data}) => {

  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState('2024');
  const years = Array.from({ length: 100 }, (_, index) => currentYear - index);
    const filteredExpenses = expenses.filter(
        expense => new Date(expense.date).getFullYear().toString() === selectedYear
      );

      const calculateMonthlyExpenses = (filteredExpenses) => {
        const monthlyExpenses = {};
        const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
            monthOrder.forEach(month => {
                const monthYear = `${month} ${selectedYear}`;
                monthlyExpenses[monthYear] = 0;
            });
    
        // Update monthlyExpenses based on the filtered expenses
        filteredExpenses.forEach((expense) => {
            const monthYear = new Date(expense.date).toLocaleString('default', { month: 'short', year: 'numeric' });
                monthlyExpenses[monthYear] += Number(expense.amount);
        });
    
        // Extract all unique month-year keys
        const allMonthYears = Object.keys(monthlyExpenses).sort((a, b) => {
            const [aMonth, aYear] = a.split(' ');
            const [bMonth, bYear] = b.split(' ');
            return aYear - bYear || monthOrder.indexOf(aMonth) - monthOrder.indexOf(bMonth);
        });
        
        console.log(allMonthYears);
        return allMonthYears.map((monthYear) => ({
            name: monthYear.split(' ')[0],
            uv: monthlyExpenses[monthYear] || 0,
        }));
    };
      return (
        <> 
        <div className="wrapper mx-auto p-8 rounded-lg shadow-lg w-full max-w-6xl mx-4">
        <MonthlyChart data={calculateMonthlyExpenses(filteredExpenses)} />
        <div className="filter mb-4 flex justify-between">
        <p className="text-white expense-title font-normal md:font-extrabold text-2xl">Filter by year</p>
            <select
            id="year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-half text-black bg-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {years.map(year => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            {/* <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option> */}
          </select>
        </div>

        {(filteredExpenses.length > 0) ? (filteredExpenses.map((expense, index) => (
          <ExpenseCard
            expenses={expenses}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            setExpenses={setExpenses} 
          />
        ))) : (
          <p className="noexpense text-center font-normal text-white md:font-extrabold text-xl">No expenses found for the selected year.</p>
        )} 
        </div>
        </>
     );
}
 
export default ExpenseList;