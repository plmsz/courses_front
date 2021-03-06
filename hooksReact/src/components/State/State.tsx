import { useState } from "react";

export default function State() {
    type Greeting = 'Hello, friend?' | 'Hello'
	const [greeting, setGreeting] = useState<Greeting>("Hello");
    const [count, setCount] = useState(0);


	return (
        	<>
		<p onMouseMove={()=>setGreeting('Hello, friend?')}>
			{greeting}
		</p>
        	<button onClick={() => setCount(prevCount => prevCount + 1)}>You've clicked {count}</button>
		</>
	);
}
