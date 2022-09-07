import React, { useEffect } from "react";
import FormInput from "../components/FormInput";

const Register = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className="py-12">
				<h2 className="text-center text-2xl font-bold">Register</h2>
				<FormInput />
			</div>
		</>
	);
};

export default Register;
