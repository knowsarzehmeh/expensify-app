import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../components/ExpenseForm";
import { editExpense, removeExpense } from "../redux/actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
    // console.log("updated", expense);
  };
  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>remove</button>
      </div>
    );
  }
}

const mapStateToprops = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: data => dispatch(removeExpense(data))
  };
};

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(EditExpensePage);
