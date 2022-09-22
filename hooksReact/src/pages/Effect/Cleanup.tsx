import { useEffect, useState } from 'react';

function Cleanup() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('use effect has run interval starts');
    const interval = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);
    return () => {
      console.log('interval has been cleared');
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>
        {number}
        {/* if you type number goes up randomly, so you need to clean the function */}
      </div>
    </>
  );
}

export default Cleanup;
