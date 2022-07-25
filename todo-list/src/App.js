import { useState } from 'react';
import './App.css';
import AddCard from './components/AddCard';
import TodoList from './components/TodoList';

function App() {
  const [taskname, setTaskname] = useState('');
  const [todos, setTodos] = useState([{
    id: 1,
    title: 'ler FMA 5',
    created_at: +new Date(2022, 23, 6, 15, 43),
    done: true,
  }]);

  function handleAddCard() {
    let newList = [...todos];
    let id = newList[newList.length - 1]?.id + 1 || 1;

    newList.push({
      id: id,
      title: taskname,
      created_at: +new Date(),
      done: false,
    });
    setTodos(newList);
  }
  function handleRemove(id) {
    let newList = [...todos];
    const index = newList.findIndex((item) => item.id === id);
    newList.splice(index, 1);
    setTodos(newList);
  }
  function handleComplete(id) {
    let newList = [...todos];
    for (const item of newList) {
      if (id === item.id) {
        item.done = true;
      }
    }
    setTodos(newList);
  }

  return (
    <div className="App">
      <AddCard handleAddCard={handleAddCard} setTaskname={setTaskname} />
      <TodoList todos={todos} handleRemove={handleRemove} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
