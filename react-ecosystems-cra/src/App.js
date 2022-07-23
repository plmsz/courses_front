import './App.css';
import AddCard from './components/AddCard';
import Card from './components/Card';
import { useState } from 'react';


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
      <h2>Complete</h2>
      {todos.filter(item => item.done === true).map((todo) =>
        <Card {...todo} key={todo.id} onRemove={handleRemove} />
      )}
      <h2>Incomplete</h2>
      {todos.filter(item => item.done === false).map((todo) =>
        <Card {...todo} key={todo.id} onRemove={handleRemove} onClick={handleComplete} />
      )}
    </div>
  );
}

export default App;
