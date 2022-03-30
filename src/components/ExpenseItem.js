import './ExpenseItem.css';

/**
 * Custom component for rendering the expense of the items
 * @param
 * @returns {HTMLElement} HTML Element(s)
 * @author Juwe Jesse
 * @todo Finish Implementation
 */
const ExpenseItem = () => {
  const now = new Date();
  return (
    <div className="expense-item">
      <div>{now.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
