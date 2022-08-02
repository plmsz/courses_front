const redux = require('redux');
const store = redux.store
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
const fecthUsersFailure = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    };
};
const fecthUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED
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
        default:
        case FETCH_USERS_SUCCEEDED:
         return {
            loading: false,
            data: action.payload
            error: ''
         }
        case FETCH_USERS_FAILED:
         return {
            loading: false,
            useres: []
            error: action.payload
         }
        default:
            break;
    }
};

const store = createStore(reducer)