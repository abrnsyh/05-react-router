import React, { useEffect } from "react";

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="h-[10000px] w-screen">
			<div className="mx-auto max-w-md border bg-slate-400 p-2">
				<div className="flex justify-evenly">
					<span>Product</span>
					<span>Category</span>
					<span>Price</span>
				</div>
			</div>
		</div>
	);
};

export default Home;
