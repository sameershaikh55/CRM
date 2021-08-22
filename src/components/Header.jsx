import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// IMPORTS
import logo from "../assets/logo.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Header = ({ sideBar, setSideBar }) => {
	const [nestedNav, setNestedNav] = useState(false);

	return (
		<div className="header_container bg-white shadow-sm">
			<div className="page_containers h-100">
				<div className="container-fluid h-100">
					<div className="d-flex align-items-center justify-content-between h-100">
						<div className="logo_container">
							<NavLink to="/">
								<img src={logo} alt="logo" />
							</NavLink>
						</div>
						<div className="burger_container">
							{(!sideBar && (
								<div>
									<GiHamburgerMenu
										className="pointer"
										onClick={() => setSideBar(true)}
										fontSize="1.5rem"
									/>
								</div>
							)) || (
								<ImCross
									className="pointer"
									onClick={() => setSideBar(false)}
								/>
							)}
						</div>
						<div className="pe-5 position-absolute end-0 d-none d-md-flex align-items-center">
							<div
								to=""
								className="d-flex align-items-center ms-4 text-decoration-none pointer position-relative"
								onClick={() => setNestedNav(!nestedNav)}
							>
								<img
									className="avatar"
									src="https://www.karinesimonphotography.com/images/gallery/men/2.jpg"
									alt=""
								/>
								<div className="nav_link ms-1">AltumCode</div>
								<TiArrowSortedDown className="ms-1" />

								{nestedNav && (
									<div className="nested_nav">
										<ul className="ps-0">
											<li>Dashboard</li>
											<li>Reports</li>
											<li>Calender Feature</li>
											<hr className="my-2" />
											<li>Logout</li>
										</ul>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
