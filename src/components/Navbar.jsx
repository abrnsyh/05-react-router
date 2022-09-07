import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiCloseCircleFill } from "react-icons/ri";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const isLogin = JSON.parse(localStorage.getItem("isLogin"));
	const logOutHandler = () => {
		localStorage.setItem("isLogin", false);
		window.location.reload(false);
	};
	const clickHandler = () => {
		setOpen(!open);
	};

	return (
		<>
			<div className="sticky top-0 z-[10] flex w-screen flex-col items-center justify-center gap-4 bg-black p-4 text-slate-100 sm:relative sm:p-5">
				<div className="flex w-screen px-5 sm:hidden">
					<HiMenuAlt2
						size="24"
						className={`mr-auto cursor-pointer ${open ? "hidden" : "block"}`}
						onClick={clickHandler}
					/>
					<RiCloseCircleFill
						size="24"
						className={`mr-auto cursor-pointer ${open ? "block" : "hidden"}`}
						onClick={clickHandler}
					/>
					<h1 className="mr-auto">05-REACT-ROUTER</h1>
				</div>
				<div
					className={`absolute top-px ${
						!open ? "left-[-1000px]" : "left-0"
					} z-[-5] flex h-screen w-full flex-col justify-center gap-9 bg-black pl-3 transition-all duration-300 sm:static sm:h-full sm:flex-row`}
				>
					<Link
						className="w-full border border-transparent transition-all duration-200 hover:border-b-slate-100 sm:w-fit"
						to="/"
						onClick={clickHandler}
					>
						Home
					</Link>
					<Link
						className="w-full border border-transparent transition-all duration-200 hover:border-b-slate-100 sm:w-fit"
						to="/products"
						onClick={clickHandler}
					>
						Products
					</Link>
					<Link
						className="w-full border border-transparent transition-all duration-200 hover:border-b-slate-100 sm:w-fit"
						to="/profile"
						onClick={clickHandler}
					>
						Profile
					</Link>
					{isLogin === false ? (
						<>
							<Link
								className="w-full border border-transparent transition-all duration-200 hover:border-b-slate-100 sm:w-fit"
								to="/login"
								onClick={clickHandler}
							>
								Login
							</Link>
							<Link
								className="w-full border border-transparent transition-all duration-200 hover:border-b-slate-100 sm:w-fit"
								to="/register"
								onClick={clickHandler}
							>
								Register
							</Link>
						</>
					) : (
						<>
							<Link
								className="w-full border border-transparent transition-all duration-200 hover:border-b-slate-100 sm:w-fit"
								to="/"
								onClick={logOutHandler}
							>
								Logout
							</Link>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
