import { combineReducers, createStore} from 'redux';
import todoReducers from './reducers/todoReducers';


const reducers = combineReducers({
    todos: todosReducers
})

function createStore() {
    return createStore(reducers)
}

export default createStore