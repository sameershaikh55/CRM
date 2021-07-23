import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// IMPORTS
import logo from "../assets/logo.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { RiAdminFill, RiPixelfedFill } from "react-icons/ri";
import { AiOutlineGlobal, AiFillSetting } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa";
import { GrPlan } from "react-icons/gr";
import { BiCodeAlt, BiLogIn } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
	const [nestedNav, setNestedNav] = useState(false);
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
						<div className="d-block d-md-none">
							<GiHamburgerMenu fontSize="1.5rem" />
						</div>
						<div className="d-none d-md-flex align-items-center">
							<NavLink
								to=""
								className="text-decoration-none mainColor nav_link"
							>
								Dashboard
							</NavLink>
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
											<li>
												<RiAdminFill className="me-2" /> Admin
											</li>
											<li>
												<AiOutlineGlobal className="me-2" /> Custom domains
											</li>
											<li>
												<BsLink45Deg className="me-2" /> Links
											</li>
											<li>
												<FaProjectDiagram className="me-2" /> Projects
											</li>
											<li>
												<RiPixelfedFill className="me-2" /> Pixels
											</li>
											<hr className="my-2" />
											<li>
												<AiFillSetting className="me-2" /> Account
											</li>
											<li>
												<GrPlan className="me-2" /> Plan
											</li>
											<li>
												<BiCodeAlt className="me-2" /> API
											</li>
											<hr className="my-2" />
											<li>
												<BiLogIn className="me-2" /> Logout
											</li>
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
