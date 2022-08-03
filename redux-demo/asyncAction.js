const redux = require('redux');
const reduxThunk = require('redux-thunk').default;
const axios = require('axios');

const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

const initialState = {
    loading: false,
    users: [],
    error: '',
};


const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fecthUsersRequest = (error) => {
    return {
        type: FETCH_USERS_REQUESTED
    };
};
const fecthUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    };
};
const fecthUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
         return {
            ...state,
            loading: true,
         }
        case FETCH_USERS_SUCCEEDED:
         return {
            loading: false,
            data: action.payload,
            error: ''
         }
        case FETCH_USERS_FAILED:
         return {
            loading: false,
            users: [],
            error: action.payload
         }
        default:
            return state;
    }
};

const fetchUsers = () =>{
    return function(dispatch){
        dispatch(fecthUsersRequest())
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data.map((user) => user.username)
            dispatch(fecthUsersSuccess(users)) 
        })
        .catch((error)  => {
            dispatch(fecthUsersFailure(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(reduxThunk))

store.subscribe(() => {console.log(store.getState())})

store.dispatch(fetchUsers() )