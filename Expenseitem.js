import './ExpenseItem.css';
function ExpenseItem() {
    const expenseDate = new Date(2021 , 2 , 8);
    const expenseTitle ='car Insurance';
    const expenseAmount = 294.67;
    return (
    <div className="expense-item">
      <div>{expenseDate.toISOSting}</div>
      <div className="expense-item_description">
       <h2>{expenseTitle}</h2>
       <div className="expense-item_price">${expenseAmount}294.67</div>
      </div>
      </div>
   
        );
}
export default ExpenseItem;
