// import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
// import NewExpense from '../NewExpense/NewExpense';

/**
 * Custom component for rendering the expense of the items
 * @param
 * @returns {HTMLElement} HTML Element(s)
 * @author Juwe Jesse
 * @todo Finish Implementation
 */
const ExpenseItem = props => {
  // const [amount, setPrice] = useState(props.amount);
  const options = {
    style: 'currency',
    currency: 'USD',
  };

  const locale = navigator.language;

  // prettier-ignore
  const price = `${new Intl.NumberFormat(locale, options).format(props.amount)}`;

  // const clickHandler = () => {
  //   setPrice(5000);

  //   return <NewExpense></NewExpense>;
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
