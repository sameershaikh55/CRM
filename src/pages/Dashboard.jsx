import React from "react";

// IMPORTS
import Header from "../components/Header";
import States from "../components/States";
import ChartSec from "../components/ChartSec";
import LinksSec from "../components/LinksSec";

const Dashboard = () => {
	return (
		<>
			<Header />
			<States />
			<ChartSec />
			<LinksSec />
		</>
	);
};

export default Dashboard;
