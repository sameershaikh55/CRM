import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// IMPORTS
import logo from "../assets/logo.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Header = () => {
	const [nestedNav, setNestedNav] = useState(false);
	const [sidebar, setSidebar] = useState(false);
	return (
		<div className="header_container bg-white shadow-sm">
			<div className="page_container">
				<div className="container-fluid">
					<div className="d-flex align-items-center justify-content-between">
						<div className="logo_container">
							<NavLink to="/">
								<img src={logo} alt="logo" />
							</NavLink>
						</div>
						<div className="d-flex align-items-center">
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
											<li>Admin</li>
											<li>Custom domains</li>
											<li>Links</li>
											<li>Projects</li>
											<li>Pixels</li>
											<hr className="my-2" />
											<li>Account</li>
											<li>Plan</li>
											<li>API</li>
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

			{/* <div className="pt-4 pb-2">
				<div className="d-flex flex-column d-md-none justify-content-start align-items-start px-3">
					<div
						to=""
						className="d-flex align-items-center text-decoration-none pointer position-relative"
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
									<li>Admin</li>
									<li>Custom domains</li>
									<li>Links</li>
									<li>Projects</li>
									<li>Pixels</li>
									<hr className="my-2" />
									<li>Account</li>
									<li>Plan</li>
									<li>API</li>
									<hr className="my-2" />
									<li>Logout</li>
								</ul>
							</div>
						)}
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default Header;
