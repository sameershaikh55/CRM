import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalenderBody = () => {
	const [value, onChange] = useState(new Date());

	return (
		<div className="calender_container d-flex justify-content-center align-items-center">
			<div className="page_container">
				<div className="container-fluid">
					<Calendar onChange={onChange} value={value} />
				</div>
			</div>
		</div>
	);
};

export default CalenderBody;
