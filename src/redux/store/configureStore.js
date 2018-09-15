import { createStore, combineReducers } from "redux";
import ExpensesReducer from "../reducers/expensesReducer";
import FiltersReducer from "../reducers/filtersReducer";

const store = () =>
  createStore(
    combineReducers({
      expenses: ExpensesReducer,
      filters: FiltersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;
