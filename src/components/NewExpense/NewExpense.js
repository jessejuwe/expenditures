import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

// Function for creating a new Expense
const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };

    props.onAddExpense(expenseData);
    setIsEditing(false);

    return expenseData;
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const closeFormHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={closeFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
