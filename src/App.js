import { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

/**
 * Renders the main component to the browser
 * @param
 * @returns {Object | undefined} An object to be returned
 * @author Juwe Jesse
 * @todo Finish Implementation
 */

const DUMMY_EXPENSES = [
  // {
  //   id: 'e1',
  //   title: 'Toilet Paper',
  //   amount: 94.12,
  //   date: new Date(2022, 7, 14),
  // },
  // {
  //   id: 'e2',
  //   title: 'New TV',
  //   amount: 799.49,
  //   date: new Date(2021, 2, 12),
  // },
  // {
  //   id: 'e3',
  //   title: 'Car Insurance',
  //   amount: 294.67,
  //   date: new Date(2022, 2, 28),
  // },
  // {
  //   id: 'e4',
  //   title: 'New Desk (Wooden)',
  //   amount: 450,
  //   date: new Date(2021, 5, 12),
  // },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const setLocalStorage = data => {
    // JSON.stringify() converts objects to strings
    localStorage.setItem('expenses', JSON.stringify(data));
  };

  const getFromLocalStorage = () => {
    // Objects coming from local storage will not inherit all the methods they had before
    const data = JSON.parse(localStorage.getItem('expenses'));

    // Guard Clause
    if (!data) return;

    console.log(data);
    expenses.push(...data);
  };

  // Get data from local storage
  getFromLocalStorage();

  const addExpendeHandler = expense => {
    // Guard Clause
    if (!expense) return;

    console.log(expense);
    console.log('Data Passed!');

    setExpenses([expense, ...expenses]);

    // Push data to expense []
    expenses.push(expense);
    console.log(expenses);

    // Push data to local storage
    setLocalStorage(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpendeHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
