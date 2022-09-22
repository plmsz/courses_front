# Immer:
npm i immer
modifica um objeto (state) que é imutável
~~~js
const initialState = {
   name: 'Paloma',
   address: {
    street: '212 Main Street',
    city: 'San Francisco',
    state: 'CA',
   }
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case STREET_UPDATE:
            // return {
            //     ...state,
            //    address: {
            //     ...state.address,
            //     street: action.payload,
            //    }
            // };
            return produce(state,(draft)=> {
                draft.address.street = action
            })
        default:
            return state;
    }
};
~~~
# logger (middlewares)
npm i --save redux-logger

const applyMiddleware = require('redux').applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const store = createStore(rootReducer, applyMiddleware(logger)); 

-
npm i @reduxjs/toolkit

---
# redux-toolkit
https://redux-toolkit.js.org/usage/usage-guide

## extra reducers
https://redux-toolkit.js.org/api/createslice#the-extrareducers-builder-callback-notation

npm create vite@latest react-redux-toolkit
npm i axios @reduxjs/toolkit