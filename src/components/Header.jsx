import React from "react";
import { NavLink } from "react-router-dom";

// IMPORTS
import logo from "../assets/logo.png";
import { TiArrowSortedDown } from "react-icons/ti";

const Header = () => {
	return (
		<div className="header_container bg-white shadow-sm">
			<div className="page_container">
				<div className="container-fluid">
					<div className="d-flex align-items-center justify-content-between">
						<div className="logo_container">
							<img src={logo} alt="logo" />
						</div>
						<div className="d-flex align-items-center">
							<NavLink to="" className="text-decoration-none">
								Dashboard
							</NavLink>
							<div
								to=""
								className="d-flex align-items-center ms-4 text-decoration-none pointer"
							>
								<img src="" alt="" />
								<div>AltumCode</div>
								<TiArrowSortedDown className="ms-1" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
