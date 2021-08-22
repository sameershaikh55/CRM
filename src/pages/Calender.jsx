import React, { useState } from "react";

// IMPORTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import CalenderBody from "../components/CalenderBody";

const Calender = () => {
	const [sideBar, setSideBar] = useState(false);

	return (
		<>
			<Header sideBar={sideBar} setSideBar={setSideBar} />
			<div className="wholePage">
				<div className="d-flex">
					{sideBar && (
						<div
							style={{ width: (sideBar && "230px") || "0px" }}
							className="animation_class position-fixed h-100 bg-white me-3"
						>
							<SideBar />
						</div>
					)}
					<div className="firstD bg-white me-3">
						<SideBar />
					</div>
					<div className="secondD">
						<CalenderBody />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Calender;
