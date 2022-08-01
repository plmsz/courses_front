import './style.css';

function TodoListItem({
  id,
  title,
  created_at,
  done,
  onRemove,
  handleComplete,
}) {
  return (
    <div className='card__container'>
      <p>{title}</p>
      <div className='card__content'>
        <span>Created at: {created_at}</span>
        <div className='card__buttons'>
          {!done && (
            <button onClick={() => handleComplete(id)}>
              Mark as Completed
            </button>
          )}
          <button onClick={() => onRemove(id)}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default TodoListItem;
