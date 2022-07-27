- Persitors:
https://github.com/rt2zz/redux-persist#basic-usage
- Redux thunk - side effect library
- Plugin
Redux dev tools
https://github.com/reduxjs/redux-devtools/tree/main/extension#1-with-redux
- reselect
Reselect exports a createSelector API, which generates memoized selector functions. 
gives you a place to put logic for transforming redux data
If you are using createSelector,  the return value of the function changes only when the return value of the selectors that you pass as arguments changes
https://github.com/reduxjs/reselect
-------
# Best Practices
-  Your file should export both the unconnected and connected versions of that component. 
Your tests should't care wether your component is connected or not.

- You should never trigger any other actions from inside your reducers or perform any kind of asynchronous operations such as fetching data from the network. 

- 
