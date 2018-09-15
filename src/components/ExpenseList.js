import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../redux/selectors/expenses";

export const ExpenseList = props => {
  //   console.log(props);
  const { expenses } = props;
  return (
    <div>
      {expenses.length > 0 ? (
        expenses.map(expense => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      ) : (
        <p>No Expenses</p>
      )}
    </div>
  );
};

const mapStatesToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStatesToProps)(ExpenseList);
