import React, { useEffect } from "react";

const Profile = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const user = JSON.parse(localStorage.getItem("user"));
	return (
		<>
			<div className="py-2">
				<h2 className="text-center text-2xl font-bold">Profile</h2>
				<div className="mx-auto mt-1 w-1/2 border border-gray-700 p-2">
					<p>Name : {user.name}</p>
					<p>Gender : {user.gender}</p>
					<p>Birthdate : {user.birthdate}</p>
					<p>Address : {user.address}</p>
					<p>Email : {user.email}</p>
					<p>
						Skills : {user?.skill1} {user?.skill2} {user?.skill3}
					</p>
				</div>
			</div>
		</>
	);
};

export default Profile;
