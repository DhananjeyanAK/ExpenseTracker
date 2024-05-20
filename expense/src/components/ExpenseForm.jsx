import { useEffect, useState } from "react";
const ExpenseForm = ({ addExpense }) => {
  const id =Date.now();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id,
      title,
      amount,
      date
    };
    addExpense(expense);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return ( <>
    <div className="expenseinput mx-auto bg-lavender p-8 rounded-lg shadow-lg w-full max-w-6xl mx-4">
    <form action="#" method="POST" onSubmit={handleSubmit}>
    <div class="inputtop space-x-16 mb-4">
      <div className="mb-4">
        <label for="title" class="block text-gray-700 font-medium mb-2">Title</label>
        <input type="text" id="title" name="title" value={title}
          onChange={(e) => setTitle(e.target.value)} class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
        </input>
      </div>
      <div className="mb-4">
        <label for="amount" class="block text-gray-700 font-medium mb-2">Amount</label>
        <input type="number" id="amount" name="amount" value={amount}
          onChange={(e) => setAmount(e.target.value)} class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
        </input>
      </div>
    </div>
      <div className="mb-4">
        <label for="date" class="block text-gray-700 font-medium mb-2">Date</label>
        <input type="date" id="date" name="date" value={date}
          onChange={(e) => setDate(e.target.value)} class="w-2/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500" required>
        </input>
      </div>
      <button type="submit" class="addexpense w-half bg-violet text-white py-2 px-4 rounded-lg hover:bg-violet focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Add Expense</button>
    </form>
  </div> 
    </> );
}
 
export default ExpenseForm;