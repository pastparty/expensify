import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense,
         removeExpense,
         editExpense } from './actions/expenses';
import { setTextFilter,
         sortByAmount,
         sortByDate,
         setStartDate,
         setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/style.scss';


const store = configureStore();

store.dispatch(addExpense({
    description: 'Water bill'
}));

store.dispatch(addExpense({
    description: 'Gas bill'
}));

setTimeout(() => {
    store.dispatch(setTextFilter('water'));
}, 3000);


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
