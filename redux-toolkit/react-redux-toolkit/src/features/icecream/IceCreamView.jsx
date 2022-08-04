import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';
import { useState } from 'react';

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numberOfIceCreams
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice creams: {numberOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
      <button onClick={() => dispatch(restocked(value))}>Restock IceCream</button>
      <input
        type='number'
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
    </div>
  );
};

export default IceCreamView;
