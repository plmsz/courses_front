const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/icecream/icecreamSlice').iceCreamActions

console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(()=> {console.log('update state', store.getState())})
 
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())

store.dispatch(cakeActions.restocked(2))

store.dispatch(iceCreamActions.ordered())

store.dispatch(iceCreamActions.restocked(3))