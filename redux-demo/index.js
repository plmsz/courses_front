const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERERD = 'CAKE_ORDERERD';

function orderCake() {
    return {
        type: CAKE_ORDERERD,
        quantity: 1,
    };
}

const initialState = {
    numberOfCakes: 10
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERERD:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1,
            };
        default:
            return state;
    }
};


const store = createStore(reducer);  // holds application state

console.log('Initial state:', store.getState()); // allow access to state via getState method

const unsubscribe = store.subscribe(() => console.log('update state', store.getState())); //register listeners 

store.dispatch(orderCake()); //allows statete to be updated via dispatch
store.dispatch(orderCake());
store.dispatch(orderCake());


unsubscribe()  // hanles unregistering of listeners via the function returned by subscribe




