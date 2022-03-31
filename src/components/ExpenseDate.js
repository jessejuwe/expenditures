import './ExpenseDate.css';

const ExpenseDate = props => {
  const locale = navigator.language;

  const day = props.date.toLocaleString(locale, { day: '2-digit' });
  const month = props.date.toLocaleString(locale, { month: 'long' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
