import '../Expenses/ExpenseDate.css';

const ExpenseDate = props => {
  const locale = navigator.language;

  // console.log(new Date(props.date).getFullYear().toString());

  const day = new Date(props.date).toLocaleString(locale, { day: '2-digit' });
  const month = new Date(props.date).toLocaleString(locale, { month: 'long' });
  const year = new Date(props.date).getFullYear().toString();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
