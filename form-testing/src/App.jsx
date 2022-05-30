import { useState, useEffect } from "react";
import "./App.css";

export const validateInput = (txt = "") => txt.includes("@");

function App() {
	const [formData, setFormData] = useState({});
	const [error, setError] = useState({ email: false, password: false });

	useEffect(() => {
		setError({ email: false, password: false });
	}, [formData]);

	const handleSubmit = (ev) => {
		ev.preventDefault();
		if (error.email || error.password || Object.values(formData).length === 0) {
			return;
		}
		alert("Sucesso", formData);
	};

	const handleErrors = ({ target: { name, value } }) => {
		if (value === "") {
			setError((prev) => ({ ...prev, [name]: true }));
		}
		if (name === "email" && !validateInput) {
			setError((prev) => ({ ...prev, [name]: true }));
		}
	};

	const handleChange = ({ target: { name, value } }) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<main class="container flex flex--coluna flex--centro">
			<form className="formulario flex flex--coluna" onSubmit={handleSubmit}>
				<fieldset>
					<legend className="formulario__legenda">Sign-In</legend>
					<div
						className={`input-container ${
							error.email ? "input-container--invalido" : null
						}`}
					>
						<input
							name="email"
							id="email"
							className="input"
							placeholder="Email"
							data-tipo="email"
							onChange={handleChange}
							onBlur={handleErrors}
						/>
						<label className="input-label" for="email">
							Email
						</label>
						{error.email ? (
							<span className="input-mensagem-erro">
								O campo email não está válido
							</span>
						) : null}
					</div>
					<div
						className={`input-container ${
							error.password ? "input-container--invalido" : null
						}`}
					>
						<input
							name="password"
							id="password"
							className="input"
							type="password"
							placeholder="Senha"
							data-tipo="senha"
							onChange={handleChange}
							onBlur={handleErrors}
						/>
						<label className="input-label" for="senha">
							Senha
						</label>
						{error.password ? (
							<span className="input-mensagem-erro">
								O campo senha não está válido
							</span>
						) : null}
						<button className="botao">Cadastrar</button>
					</div>
				</fieldset>
			</form>
		</main>
	);
}

export default App;
