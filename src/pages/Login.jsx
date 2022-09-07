import React, { useEffect } from "react";
import LoginInput from "../components/LoginInput";

const Login = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className="py-12">
				<h2 className="text-center text-2xl font-bold">Login</h2>
				<LoginInput />
			</div>
		</>
	);
};

export default Login;
