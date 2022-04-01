import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

// Function for creating a new Expense
const NewExpense = props => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };

    props.onAddExpense(expenseData);

    return expenseData;
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
