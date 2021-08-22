import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
	return (
		<div className="sidebar_container shadow-sm position-relative">
			<div className="container-fluid">
				<div className="row">
					<ul>
						<li>
							<NavLink
								to="/"
								exact
								className="text-decoration-none"
								activeClassName="active_nav"
							>
								<div className="px-3">Dashboard</div>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/report"
								exact
								className="text-decoration-none"
								activeClassName="active_nav"
							>
								<div className="px-3">Reports</div>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/calender"
								exact
								className="text-decoration-none"
								activeClassName="active_nav"
							>
								<div className="px-3">Calender Feature</div>
							</NavLink>
						</li>
						{/* <li className="logout">
							<NavLink
								exact
								to="/logout"
								className="text-decoration-none"
								activeClassName="active_nav"
							>
								<div className="px-3">Logout</div>
							</NavLink>
						</li> */}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
