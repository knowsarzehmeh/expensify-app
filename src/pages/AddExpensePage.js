import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../components/ExpenseForm";
import { addExpense } from "../redux/actions/expenses";

export const AddExpensePage = ({ addExpense, history }) => (
  <div>
    <h3>Add Expense</h3>
    <ExpenseForm
      onSubmit={expense => {
        // an action needs to be dispatched to the redux store to add expense
        // dispatch(addExpense(expense));
        addExpense(expense);
        history.push("/");
      }}
    />
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    addExpense: expense => dispatch(addExpense(expense))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
