import './ExpenseItem.css';
import { DATE_STAMP } from '../config.js';

/**
 * Custom component for rendering the expense of the items
 * @param
 * @returns {HTMLElement} HTML Element(s)
 * @author Juwe Jesse
 * @todo Finish Implementation
 */
const ExpenseItem = () => {
  const curDate = new Date().toLocaleDateString();
  return (
    <div className="expense-item">
      <div className="expense-item__date">{curDate}</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
