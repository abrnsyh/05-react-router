import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginInput = () => {
	const userRef = useRef();
	const navigate = useNavigate();
	const user = localStorage.getItem("user");
	const userParse = JSON.parse(localStorage.getItem("user"));
	const handleSubmit = (e) => {
		e.preventDefault();
		const userData = Object.fromEntries(new FormData(e.target).entries());
		if (user === null) {
			return alert("email dan password salah");
		}
		if (userData.email === userParse.email && userData.password === userParse.password) {
			alert("Login Success");
			localStorage.setItem("isLogin", "true");
			window.location.reload();
			return navigate("/profile");
		}
		return alert("email dan password salah");
	};
	return (
		<div className="mx-auto mt-8 max-w-md">
			<form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit} ref={userRef}>
				<label className="block">
					<span className="text-gray-700">Email</span>
					<input
						name="email"
						type="text"
						className="mt-0 block w-full border-0 border-b-2 border-gray-200 py-2 px-1 focus:border-black focus:outline-none focus:ring-0"
						placeholder="john@example.com"
						required
					/>
				</label>
				<label className="block">
					<span className="text-gray-700">Password</span>
					<input
						name="password"
						type="password"
						className="mt-0 block w-full border-0 border-b-2 border-gray-200 py-2 px-1 focus:border-black focus:outline-none focus:ring-0"
						required
					/>
				</label>
				<button className="rounded-lg border bg-black py-2 px-1 text-gray-200 active:opacity-50" type="submit">
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginInput;
