import React from "react";

import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const States = () => {
	const data = [
		{
			t: "Total domains",
			a: "2",
			p: "2.8%",
		},
		{
			t: "Total projects",
			a: "6",
			p: "2.8%",
		},
		{
			t: "Total links",
			a: "90",
			p: "2.8%",
		},
		{
			t: "Total clicks",
			a: "98",
			p: "2.8%",
		},
	];

	return (
		<div className="states_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row gx-5">
						{data.map((prev, i) => {
							const { t, a, p } = prev;
							return (
								<div key={i} className="upper_card col-3 text-center">
									<div className="states_card bg-white py-4">
										<p className="title mb-0 text-uppercase">{t}</p>
										<h2 className="my-2">{a}</h2>
										<p className="amount fw-bold mb-0">
											{i === 0 && (
												<>
													<IoMdArrowDropup /> {p}
												</>
											)}
											{i === 3 && (
												<>
													<IoMdArrowDropup /> {p}
												</>
											)}
											{i === 2 && (
												<>
													<IoMdArrowDropup /> {p}
												</>
											)}
											{i === 1 && (
												<>
													<IoMdArrowDropdown /> {p}
												</>
											)}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default States;
