import { createStore } from 'redux';


//create the redux store
const store = createStore((state = { count: 0 }, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return {
                    count: state.count + 1
                }
            case 'DECREMENT':
                const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
                return {
                    count: state.count + decrementBy
                }
            default:
               return {
                   count: 0
               }
        }
})


const unsubscribe = store.subscribe(()=> {
  console.log(store.getState());  
});

store.dispatch({
    type: 'INCREMENT'
})


store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
})


 const { incrementBy = 1 }      = {
            incrementBy : 5
        }