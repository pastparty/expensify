import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});


const setCount = ({ count }) => ({
    type: 'SET',
    count
});


const resetCount = () => ({
    type: 'RESET'
});




const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                count: state.count + action.incrementBy
            };
        }
        case 'DECREMENT': {
            return {
                count: state.count - action.decrementBy
            };
        }
        case 'SET': {
            return {
                count: action.count
            }
        }
        case 'RESET': {
            return {
                count: 0
            };
        }
        case 'BRATVOGEL': {
            return {
                count: 'BLARGELGARGEL'
            }
        }
        default: {
            return state;
        }
    }
};

const store = createStore(countReducer);

// #honestfunctionnames
let unsubscribeThisSubscriptionWhenThisGetsCalledAsAFunction = store.subscribe(() => console.log(store.getState()));

// unsubscribeThisSubscriptionWhenThisGetsCalledAsAFunction();

store.dispatch(incrementCount());



store.dispatch(incrementCount({ incrementBy: 444444 }));

store.dispatch(decrementCount({ decrementBy: 216543 }));

store.dispatch(setCount({ count: Math.PI }));

store.dispatch(resetCount({ resetCount: 0 }));

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 726
// });

//
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 41
// });
// store.dispatch({
//     type: 'INCREMENT'
// });
//
// store.dispatch({
//     type: 'INCREMENT'
// });
//
// store.dispatch({
//     type: 'RESET'
// });
//
// store.dispatch({
//     type: 'BRATVOGEL'
// });
//
//
// store.dispatch({
//     type: 'SET',
//     setValue: Math.random()
// });
