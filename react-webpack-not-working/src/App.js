import React from 'react';
import './App.css';
import Card from './components/card';
import Input from './components/input';

const App = () => (
    <div className='App'>
        <input type='text' placeholder='Type your new todo here' />
        <Input />
        <Card />
    </div>
);

export default App;