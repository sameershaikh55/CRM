import React from "react";
import { NavLink } from "react-router-dom";

// IMPORTS
import logo from "../assets/logo.png";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-6 mb-4 mb-sm-0">
						<div className="mb-2">
							<NavLink to="/">
								<img src={logo} alt="" className="logo" />
							</NavLink>
						</div>

						<div>Copyright © 2021 minilink test</div>
					</div>

					<div className="col-12 col-sm-6">
						<a
							className="text-decoration-none text-dark"
							href="https://google.com"
							target="_blank"
						>
							Google
						</a>
						<br />
						<a
							className="text-decoration-none text-dark"
							href="https://minilink.bio/"
							target="_blank"
						>
							Contacto
						</a>
						<br />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
