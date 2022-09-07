import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { Navigate } from "react-router-dom";

function App() {
	const isLogin = JSON.parse(localStorage.getItem("isLogin"));
	if (isLogin === null) {
		localStorage.setItem("isLogin", false);
	}
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/register" element={isLogin ? <Navigate to="/profile" /> : <Register />} />
				<Route path="/login" element={isLogin ? <Navigate to="/profile" /> : <Login />} />
				<Route path="/profile" element={isLogin === true ? <Profile /> : <Navigate to="/login" />} />
			</Routes>
		</>
	);
}

export default App;
