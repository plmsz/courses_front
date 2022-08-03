const { configureStore } = require('@reduxjs/toolkit');
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/icecream/icecreamSlice');

// const reduxLogger = require('redux-logger');
// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

module.exports = store;