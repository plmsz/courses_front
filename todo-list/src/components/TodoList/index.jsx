import TodoListItem from '../TodoListItem';

function TodoList({ todos, handleRemove, handleComplete }) {
  return (
    <>
    <h2>Complete</h2>
      {todos
        ?.filter((item) => item.done === true)
        .map((todo) => (
          <TodoListItem
            {...todo}
            key={todo.id}
            onRemove={handleRemove}
            handleComplete={handleComplete}
          />
        ))}
        <h2>Incomplete</h2>
        {todos
        ?.filter((item) => item.done === false)
        .map((todo) => (
          <TodoListItem
            {...todo}
            key={todo.id}
            onRemove={handleRemove}
            handleComplete={handleComplete}
          />
        ))}
    </>
  );
}

export default TodoList;
