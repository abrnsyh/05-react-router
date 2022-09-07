import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const FormInput = () => {
	const navigate = useNavigate();
	const userRef = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		const userData = Object.fromEntries(new FormData(e.target).entries());
		localStorage.setItem("user", JSON.stringify(userData));
		alert("Welcome " + userData.name);
		navigate("/login");
	};
	return (
		<div className="mx-auto mt-8 max-w-md">
			<form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit} ref={userRef}>
				<label className="block">
					<span className="text-gray-700">Name</span>
					<input
						name="name"
						type="text"
						className="mt-0 block w-full border-0 border-b-2 border-gray-200 py-2 px-1 focus:border-black focus:outline-none focus:ring-0"
						required
					/>
				</label>
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
				<label className="block">
					<span className="text-gray-700">Birthdate</span>
					<input
						name="birthdate"
						type="date"
						className="mt-0 block w-full border-0 border-b-2 border-gray-200 py-2 px-1 focus:border-black focus:outline-none focus:ring-0"
						required
					/>
				</label>
				<label className="block">
					<span className="text-gray-700">Address</span>
					<textarea
						name="address"
						className="mt-0 block w-full border-0 border-b-2 border-gray-200 py-2 px-1 focus:border-black focus:outline-none focus:ring-0"
						required
					/>
				</label>
				<fieldset className="block">
					<legend className="text-gray-700">Gender</legend>
					<div className="flex justify-evenly py-2 px-1">
						<label className="inline-flex items-center">
							<input
								type="radio"
								value="men"
								name="gender"
								className="mt-0 block w-full border-0 border-b-2 border-gray-200 py-2 px-1 focus:border-black focus:outline-none focus:ring-0"
								required
							/>
							<span className="ml-1">Men</span>
						</label>
						<label className="inline-flex items-center">
							<input
								type="radio"
								name="gender"
								value="women"
								className="mt-0 block w-full border-0 border-b-2 border-gray-200 py-2 px-1 focus:border-black focus:outline-none focus:ring-0"
								required
							/>
							<span className="ml-1">Women</span>
						</label>
					</div>
				</fieldset>
				<fieldset className="block">
					<legend className="text-gray-700">Skill</legend>
					<div className="flex justify-evenly py-2 px-1">
						<label className="inline-flex items-center">
							<input
								name="skill1"
								value="coding"
								type="checkbox"
								className="mt-0 block w-full border-0 border-b-2 border-gray-200 py-2 px-1 focus:border-black focus:outline-none focus:ring-0"
							/>
							<span className="ml-1">Coding</span>
						</label>
						<label className="inline-flex items-center">
							<input
								name="skill2"
								value="design"
								type="checkbox"
								className="mt-0 block w-full border-0 border-b-2 border-gray-200 py-2 px-1 focus:border-black focus:outline-none focus:ring-0"
							/>
							<span className="ml-1">Design</span>
						</label>
						<label className="inline-flex items-center">
							<input
								name="skill3"
								value="gaming"
								type="checkbox"
								className="mt-0 block w-full border-0 border-b-2 border-gray-200 py-2 px-1 focus:border-black focus:outline-none focus:ring-0"
							/>
							<span className="ml-1">Gaming</span>
						</label>
					</div>
				</fieldset>
				<button className="rounded-lg border bg-black py-2 px-1 text-gray-200 active:opacity-50" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default FormInput;
