import { useEffect, useMemo, useState } from 'react';

function Dependencies() {
  const [state, setState] = useState({ name: '', selected: false, age: 18 });
  const [name, setName] = useState('');

  const handleAdd = () => {
    setState((prev) => ({ ...prev, name }));
  };
  const handleSelect = () => {
    setState((prev) => ({ ...prev, selected: true }));
  };

  //   const user = useMemo(()=>({name: '', selected: false}),[state.name, state.selected])

  useEffect(() => {
    console.count('the state has change, useeffect has run');
    //   }, [state]); /* don't use array or objects, because will compare the allocated memory, so will always be different: {} !== {}, [1] !== [1}*/
    // }, [user]);/* to solve that you can use useMemo or better */
  }, [
    state.name,
    state.selected,
  ]); /*only use primitive types (string, number, boolean, null, undefined) */

  return (
    <>
      <button onClick={handleAdd}>Add name</button>
      <button onClick={handleSelect}>Select</button>
      <input type='text' onChange={(e) => setName(e.target.value)} />
    </>
  );
}

export default Dependencies;
