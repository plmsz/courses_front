import React, { useState, useMemo } from "react";

const rules = ["8 characteres", "lowercase word", "uppercase word"];

// Lista de erros
const Errors = ({ active }) => {
	return (
		active && (
			<ul>
				{rules.map((value, index) => (
					<li key={index}>{value}</li>
				))}
			</ul>
		)
	);
};

const CreateAccountForm = () => {
	const [password, setPassword] = useState("");
	const [showErrors, setShowErrors] = useState(false);

	const checkPassword = (event) => {
		const { value } = event.target;
		setShowErrors(value.length < 8);
		setPassword(value);
	};

	//adiciona o useMemo, Podemos utilizá-lo para salvar a lista de erros (Que no nosso caso é o componente Errors) em uma variável e informar que ela será atualizada apenas quando showErrors for alterado
	const memoizedErrors = useMemo(
		() => <Errors active={showErrors} />,
		[showErrors]
	);

	return (
		<form>
			<h1>Login</h1>
			<input placeholder="Email" />
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={checkPassword}
			/>
			 {/* <Errors active={showErrors} /> */}
			{memoizedErrors}
		</form>
	);
};

export default CreateAccountForm;
