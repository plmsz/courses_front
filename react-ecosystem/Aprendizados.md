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
- Mocha e chai
    "test": "mocha \"src/**/*.test.js\" --require @babel/register --recursive",
@babel/register
---
React 16 :'(
https://compatt.medium.com/how-to-setup-unit-tests-with-create-react-app-mocha-and-visual-studio-code-mocha-side-bar-eb4f75d8de5a

npm install -D chai chai-enzyme enzyme enzyme-adapter-react-18 cheerio
---
Redux team recommends RTL
https://redux.js.org/usage/writing-tests

https://mswjs.io/docs/getting-started/integrate/node

Action Creators & Thunks
In Redux, action creators are functions which return plain objects. Our recommendation is not to write action creators manually, but instead have them generated automatically by createSlice, or created via createAction from @reduxjs/toolkit. As such, you should not feel the need to test action creators by themselves (the Redux Toolkit maintainers have already done that for you!).

We consider thunk behavior to be an implementation detail of the application, and recommend that it be covered by testing the group of components (or whole app) using it, rather than testing the thunk in isolation.
-------
# Best Practices
-  Your file should export both the unconnected and connected versions of that component. 
Your tests should't care wether your component is connected or not.

- You should never trigger any other actions from inside your reducers or perform any kind of asynchronous operations such as fetching data from the network. 

- 
