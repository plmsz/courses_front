import { useState, useEffect, useCallback, useId } from "react";

function Effect() {
	//Usually the solution is to simply write the data fetching code inside the useEffect itself
	//What if you need to extract the function outside useEffect?
	// If the function isn't wrapped in useCallback, it will update on every re-render, and thus trigger the useEffect on every re-render.

	const [data, setData] = useState({ localidade: "" });
	const [cep, setCep] = useState("");

	const fetchData = useCallback(async () => {
		if (cep != "") {
			let validacep = /^[0-9]{8}$/;
			if (validacep.test(cep)) {
				const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
				const result = await response.json();
				console.log(result);
				setData(result);
				setCep("");
			}
		}
	}, [cep]);

	useEffect(() => {
		fetchData().catch(console.log);
	}, [fetchData]);

	return (
		<>
			<label>Digite cep </label>
			<input type="text" onChange={(e) => setCep(e.target.value)} />
			<p>Cidade: {data.localidade}</p>
		</>
	);
}

export default Effect;
