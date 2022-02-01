import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import OverviewPage from "./components/OverviewPage/OverviewPage";
import AddUserPage from "./components/AddUserPage/AddUserPage";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>Overview</Link>
						</li>
						<li>
							<Link to='/addUser'>Add User</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path='/addUser' element={<AddUserPage />} />
					<Route path='/' element={<OverviewPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
