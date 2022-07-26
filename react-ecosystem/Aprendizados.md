- Persitors:
https://github.com/rt2zz/redux-persist#basic-usage

- Plugin
Redux dev tools
https://github.com/reduxjs/redux-devtools/tree/main/extension#1-with-redux


-------
# Best Practices
-  Your file should export both the unconnected and connected versions of that component. 
Your tests should't care wether your component is connected or not.

- You should never trigger any other actions from inside your reducers or perform any kind of asynchronous operations such as fetching data from the network. 

- 
