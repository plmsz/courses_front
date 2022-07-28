import React from 'react';
import TodoList from './todos/TodoList';
import styled from 'styled-components';

const AppContainer = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    height: 100vh;
`;

const App = () => (
    <AppContainer>
        <TodoList />
    </AppContainer>
);

export default App;