import {
  addExpense,
  editExpense,
  removeExpense
} from "../../../redux/actions/expenses";

test("should setup remove expense action object ", () => {
  const action = removeExpense({ id: "512dls" });

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "512dls"
  });
});

test("should setup edit expense action object", () => {
  const expense = {
    description: "pc",
    note: "short note",
    amount: 0,
    createdAt: 0
  };
  const action = editExpense("123abc", expense);
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: expense
  });
});

test("should setup add expense with provided values", () => {
  const expense = {
    description: "pc",
    note: "short note",
    amount: 0,
    createdAt: 0
  };

  const action = addExpense(expense);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expense,
      id: expect.any(String)
    }
  });
});

test("should setup add expense action object with default value", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
