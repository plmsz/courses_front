import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'
import { ordered, restocked } from './cakeSlice'

function CakeView() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch()
  const [value, setValue] = useState(1);
  return (
    <div>
      <h2>Number or cakes: {numberOfCakes}</h2>
      <button onClick={()=> dispatch(ordered())}>Order cake</button>
      <button onClick={()=> dispatch(restocked(value))}>Restock cake</button>
      <input
        type='number'
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
    </div>
  );
}

export default CakeView;
