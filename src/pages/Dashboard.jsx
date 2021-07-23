import React from "react";

// IMPORTS
import Header from "../components/Header";
import States from "../components/States";
import ChartSec from "../components/ChartSec";
import LinksSec from "../components/LinksSec";
import Footer from "../components/Footer";

const Dashboard = () => {
	return (
		<>
			<Header />
			<States />
			<ChartSec />
			<LinksSec />
			<Footer />
		</>
	);
};

export default Dashboard;
