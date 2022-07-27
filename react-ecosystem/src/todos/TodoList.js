import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { completeTodoRequest, loadTodos, removeTodoRequest } from './thunks';

import './TodoList.css';
import { getTodosLoading, getCompleteTodos, getIncompleteTodos } from './selectors';

const TodoList = ({ completedTodos, incompletedTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {

    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            <h3>Incomplete:</h3>
            {incompletedTodos.map(todo => <TodoListItem
                key={todo.id}
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed} />)}
            <h3>Complete:</h3>
            {completedTodos.map(todo => <TodoListItem
                key={todo.id}
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed} />)}
        </div>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompleteTodos(state),
    incompletedTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(completeTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);