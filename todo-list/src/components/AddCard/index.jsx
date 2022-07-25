import './style.css';

function AddCard({ handleAddCard, setTaskname }) {
  
  function handleChange(taskname) {
    setTaskname(taskname);
  }

  return (
    <div className='AddCard__container'>
      <input type='text' placeholder='Type your task' onChange={(ev)=>handleChange(ev.target.value)} />
      <button onClick={handleAddCard}>Create task</button>
    </div>
  );
}

export default AddCard;
