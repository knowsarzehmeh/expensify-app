import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
}
);

store.dispatch(addExpense({description: 'Water bill',amount: 4500 }));
store.dispatch(addExpense({description:'Gas Bill', createdAt: 1000 }))
store.dispatch(addExpense({description:'Rent',amount: 13000 }))

const jsx = (
  <Provider store={store} >
    <AppRouter/>
  </Provider>

);
ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
