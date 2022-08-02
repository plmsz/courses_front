const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const applyMiddleware = require('redux').applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = 'CAKE_ORDERERD';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERERD';

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    };
}

function restockCake(quantity = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: quantity,
    };
}

function orderIceCream(quantity = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: quantity,
    }
}
function restockIceCream(quantity = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: quantity,
    }
}

const initialCakeState = {
    numberOfCakes: 10,
};
const initialIceCreamState = {
    numberOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1,
            };
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload
            };
        default:
            return state;
    }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1
            };
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams + action.payload
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cake: cakeReducer, 
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));  // holds application state

console.log('Initial state:', store.getState()); // allow access to state via getState method

// const unsubscribe = store.subscribe(() => console.log('update state', store.getState())); //register listeners 
const unsubscribe = store.subscribe(() => {}); //register listeners 

// store.dispatch(orderCake()); //allows state to be updated via dispatch
// store.dispatch(orderCake());
// store.dispatch(orderCake());

const actions = bindActionCreators({orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)

actions.orderIceCream()
actions.restockIceCream(1)

unsubscribe();  // handles unregistering of listeners via the function returned by subscribe