import { Helmet } from "react-helmet-async";

function Login() {
	return (
		<>
			<Helmet>
				<title>Login</title>
				<meta name="description" content="Login now" />
				<link rel="canonical" href="/login" />
			</Helmet>
			<h1>Login</h1>;
		</>
	);
}

export default Login;
