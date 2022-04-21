import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = props => {
  //   const [enteredTitle, setenteredTitle] = useState('');
  //   const [enteredAmount, setenteredAmount] = useState('');
  //   const [enteredDate, setenteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = e => {
    // setenteredTitle(e.target.value);
    // prettier-ignore
    setUserInput(prevState => ({...prevState, enteredTitle: e.target.value,}));
    removeMessage();
  };

  const amountChangeHandler = e => {
    // setenteredAmount(e.target.value);
    // prettier-ignore
    setUserInput(prevState => ({...prevState, enteredAmount: e.target.value,}));
    removeMessage();
  };

  const dateChangeHandler = e => {
    // setenteredDate(e.target.value);
    // prettier-ignore
    setUserInput(prevState => ({...prevState, enteredDate: e.target.value,}));
    removeMessage();
  };

  // Clear Input Fields (works w the help of Two-way Binding)
  const clearInputFields = () => {
    setUserInput({ enteredTitle: '', enteredAmount: '', enteredDate: '' });
  };

  // Clear Alert Message
  const removeMessage = () => {
    document.querySelector('.message').style.opacity = 0;
  };

  const submitHandler = e => {
    e.preventDefault();
    const message = document.querySelector('.message');

    // prettier-ignore
    if (!userInput.enteredTitle || !userInput.enteredAmount || !userInput.enteredDate) {
      message.textContent = 'Fill in the missing fields!';
      message.style.opacity = 1;
      console.error('Fill in the missing fields!');
      return;
    }

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    // Clear Input fields
    clearInputFields();
    message.textContent = 'Data Added!';
    message.style.color = 'green';

    // return expenseData;
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle} // Two way binding (allows you gather user input, and then change it)
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount} // Two way binding (allows you gather user input, and then change it)
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate} // Two way binding (allows you gather user input, and then change it)
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label className="message">ERROR MESSGAE</label>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
