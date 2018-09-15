import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./redux/store/configureStore";

import "react-dates/lib/css/_datepicker.css";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import { addExpense } from "./redux/actions/expenses";
const store = configureStore(); // opened the redux store

store.dispatch(addExpense({ description: "Water Bill" }));
store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 100000 }));

console.log(store.getState());

const app = (
  // served all components in the app with the store
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
