const ExpenseCard = ({id,title,amount,date,expenses,setExpenses }) => {
  
  const handleDelete = (id) => {
    console.log('Deleting expense with id:', id);
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  //console.log(key);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'long' }; // To get the full month name
    const month = new Intl.DateTimeFormat('en-US', options).format(date);
    const day = date.getDate();
    const year = date.getFullYear();
    
    return { month, day, year };
  };

  const dateObj = formatDate(date);

  return (
      <div className="expense-card mb-4 p-6 border border-gray-200 rounded-lg shadow">
        <div className="left gap-4">
          <div className="dateCard p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:text-black">
            <div className="dateContent">
            <p className="font-normal md:font-extrabold text-l">{dateObj.month}</p>
            <p>{dateObj.year}</p>
            <p className="font-normal md:font-extrabold text-4xl">{dateObj.day}</p>
            </div>
          </div>
          <div className="expense-title"> 
          <p className="font-normal md:font-extrabold text-2xl">{title}</p>
          </div>
        </div>
        <div className="right">
          <button type="submit" class="amount border bg-violet text-white rounded-lg hover:bg-violet focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">${amount}</button>
          <button type="submit" onClick={()=>handleDelete(id)} class="deleteexpense border bg-violet text-white rounded-lg hover:bg-violet focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Delete</button>
      </div>
      </div>
    );
  }
  export default ExpenseCard;
