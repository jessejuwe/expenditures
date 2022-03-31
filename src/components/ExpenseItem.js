import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

/**
 * Custom component for rendering the expense of the items
 * @param
 * @returns {HTMLElement} HTML Element(s)
 * @author Juwe Jesse
 * @todo Finish Implementation
 */
const ExpenseItem = props => {
  const options = {
    style: 'currency',
    currency: 'USD',
  };

  const locale = navigator.language;

  // prettier-ignore
  const price = `${new Intl.NumberFormat(locale, options).format(props.amount)}`;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
