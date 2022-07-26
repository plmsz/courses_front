import React from 'react';
import './App.css';
import { Card } from './components/Card';
import { Input } from './components/Input';

const App = () => (
    <div className='App'>
        <input type='text' placeholder='Type your new todo here' />
        <Input />
        <Card /> 
    </div>
);

export default App;