import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import OverviewPage from "./components/OverviewPage/OverviewPage";
import AddUserPage from "./components/AddUserPage/AddUserPage";
import styles from "./App.module.css";

function App() {
	return (
		<BrowserRouter>
			<div>
				<nav className={styles["nav-container"]}>
					<ul className={styles["list-default-style"]}>
						<li className={styles["list-single-item"]}>
							<Link to='/'>Overview</Link>
						</li>
						<li className={styles["list-single-item"]}>
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
