import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const ReportTable = () => {
	return (
		<div className="report_table_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row gx-3 gx-sm-3 gx-md-4 gx-lg-5">
						<div className="table100 ver1 m-b-110">
							<table>
								<thead>
									<tr className="row100 head">
										<th className="column100 column1 hov-column-ver1 hov-column-head-ver1">
											S.No
										</th>
										<th className="column100 column2">Lead</th>
										<th className="column100 column3">Email</th>
										<th className="column100 column4">Connects</th>
										<th className="column100 column5">Country</th>
										<th className="column100 column6">Time</th>
										<th className="column100 column7">Status</th>
									</tr>
								</thead>
								<tbody>
									<tr className="row100">
										<td className="column100 column1">1</td>
										<td className="column100 column2 ">cavin Letini</td>
										<td className="column100 column3">cavinL@78gmail.com</td>
										<td className="column100 column4">4</td>
										<td className="column100 column5">United States</td>
										<td className="column100 column6">--</td>
										<td className="column100 column7">
											<Tooltip
												TransitionComponent={Zoom}
												title="Change Status"
												placement="top"
												arrow
											>
												<label className="switch">
													<input type="checkbox" defaultChecked />
													<span className="slider round"></span>
												</label>
											</Tooltip>
										</td>
									</tr>
									<tr className="row100">
										<td className="column100 column1">2</td>
										<td className="column100 column2 ">cavin Letini</td>
										<td className="column100 column3">cavinL@78gmail.com</td>
										<td className="column100 column4">4</td>
										<td className="column100 column5">United States</td>
										<td className="column100 column6">9:00 AM</td>
										<td className="column100 column7">
											<Tooltip
												TransitionComponent={Zoom}
												title="Change Status"
												placement="top"
												arrow
											>
												<label className="switch">
													<input type="checkbox" defaultChecked />
													<span className="slider round"></span>
												</label>
											</Tooltip>
										</td>
									</tr>
									<tr className="row100">
										<td className="column100 column1">3</td>
										<td className="column100 column2">cavin Letini</td>
										<td className="column100 column3">cavinL@78gmail.com</td>
										<td className="column100 column4">4</td>
										<td className="column100 column5">United States</td>
										<td className="column100 column6">--</td>
										<td className="column100 column7">
											<Tooltip
												TransitionComponent={Zoom}
												title="Change Status"
												placement="top"
												arrow
											>
												<label className="switch">
													<input type="checkbox" defaultChecked />
													<span className="slider round"></span>
												</label>
											</Tooltip>
										</td>
									</tr>
									<tr className="row100">
										<td className="column100 column1">4</td>
										<td className="column100 column2 ">cavin Letini</td>
										<td className="column100 column3">cavinL@78gmail.com</td>
										<td className="column100 column4">4</td>
										<td className="column100 column5">United States</td>
										<td className="column100 column6">9:00 AM</td>
										<td className="column100 column7">
											<Tooltip
												TransitionComponent={Zoom}
												title="Change Status"
												placement="top"
												arrow
											>
												<label className="switch">
													<input type="checkbox" defaultChecked />
													<span className="slider round"></span>
												</label>
											</Tooltip>
										</td>
									</tr>
									<tr className="row100">
										<td className="column100 column1">5</td>
										<td className="column100 column2 ">cavin Letini</td>
										<td className="column100 column3">cavinL@78gmail.com</td>
										<td className="column100 column4">4</td>
										<td className="column100 column5">United States</td>
										<td className="column100 column6">--</td>
										<td className="column100 column7">
											<Tooltip
												TransitionComponent={Zoom}
												title="Change Status"
												placement="top"
												arrow
											>
												<label className="switch">
													<input type="checkbox" defaultChecked />
													<span className="slider round"></span>
												</label>
											</Tooltip>
										</td>
									</tr>
									<tr className="row100">
										<td className="column100 column1">6</td>
										<td className="column100 column2 ">cavin Letini</td>
										<td className="column100 column3">cavinL@78gmail.com</td>
										<td className="column100 column4">4</td>
										<td className="column100 column5">United States</td>
										<td className="column100 column6">9:00 AM</td>
										<td className="column100 column7">
											<Tooltip
												TransitionComponent={Zoom}
												title="Change Status"
												placement="top"
												arrow
											>
												<label className="switch">
													<input type="checkbox" defaultChecked />
													<span className="slider round"></span>
												</label>
											</Tooltip>
										</td>
									</tr>
									<tr className="row100">
										<td className="column100 column1">7</td>
										<td className="column100 column2 ">cavin Letini</td>
										<td className="column100 column3">cavinL@78gmail.com</td>
										<td className="column100 column4">4</td>
										<td className="column100 column5">United States</td>
										<td className="column100 column6">--</td>
										<td className="column100 column7">
											<Tooltip
												TransitionComponent={Zoom}
												title="Change Status"
												placement="top"
												arrow
											>
												<label className="switch">
													<input type="checkbox" defaultChecked />
													<span className="slider round"></span>
												</label>
											</Tooltip>
										</td>
									</tr>
									<tr className="row100">
										<td className="column100 column1">8</td>
										<td className="column100 column2 ">cavin Letini</td>
										<td className="column100 column3">cavinL@78gmail.com</td>
										<td className="column100 column4">4</td>
										<td className="column100 column5">United States</td>
										<td className="column100 column6">--</td>
										<td className="column100 column7">
											<Tooltip
												TransitionComponent={Zoom}
												title="Change Status"
												placement="top"
												arrow
											>
												<label className="switch">
													<input type="checkbox" defaultChecked />
													<span className="slider round"></span>
												</label>
											</Tooltip>
										</td>
									</tr>
									<tr className="row100">
										<td className="column100 column1">9</td>
										<td className="column100 column2 ">cavin Letini</td>
										<td className="column100 column3">cavinL@78gmail.com</td>
										<td className="column100 column4">4</td>
										<td className="column100 column5">United States</td>
										<td className="column100 column6">--</td>
										<td className="column100 column7">
											<Tooltip
												TransitionComponent={Zoom}
												title="Change Status"
												placement="top"
												arrow
											>
												<label className="switch">
													<input type="checkbox" defaultChecked />
													<span className="slider round"></span>
												</label>
											</Tooltip>
										</td>
									</tr>
									<tr className="row100">
										<td className="column100 column1">10</td>
										<td className="column100 column2 ">cavin Letini</td>
										<td className="column100 column3">cavinL@78gmail.com</td>
										<td className="column100 column4">4</td>
										<td className="column100 column5">United States</td>
										<td className="column100 column6">--</td>
										<td className="column100 column7">
											<Tooltip
												TransitionComponent={Zoom}
												title="Change Status"
												placement="top"
												arrow
											>
												<label className="switch">
													<input type="checkbox" defaultChecked />
													<span className="slider round"></span>
												</label>
											</Tooltip>
										</td>
									</tr>
									<tr className="row100">
										<td className="column100 column1">11</td>
										<td className="column100 column2 ">cavin Letini</td>
										<td className="column100 column3">cavinL@78gmail.com</td>
										<td className="column100 column4">4</td>
										<td className="column100 column5">United States</td>
										<td className="column100 column6">--</td>
										<td className="column100 column7">
											<Tooltip
												TransitionComponent={Zoom}
												title="Change Status"
												placement="top"
												arrow
											>
												<label className="switch">
													<input type="checkbox" defaultChecked />
													<span className="slider round"></span>
												</label>
											</Tooltip>
										</td>
									</tr>
									<tr className="row100">
										<td className="column100 column1">12</td>
										<td className="column100 column2 ">cavin Letini</td>
										<td className="column100 column3">cavinL@78gmail.com</td>
										<td className="column100 column4">4</td>
										<td className="column100 column5">United States</td>
										<td className="column100 column6">--</td>
										<td className="column100 column7">
											<Tooltip
												TransitionComponent={Zoom}
												title="Change Status"
												placement="top"
												arrow
											>
												<label className="switch">
													<input type="checkbox" defaultChecked />
													<span className="slider round"></span>
												</label>
											</Tooltip>
										</td>
									</tr>
									<tr className="row100">
										<td className="column100 column1">13</td>
										<td className="column100 column2 ">cavin Letini</td>
										<td className="column100 column3">cavinL@78gmail.com</td>
										<td className="column100 column4">4</td>
										<td className="column100 column5">United States</td>
										<td className="column100 column6">--</td>
										<td className="column100 column7">
											<Tooltip
												TransitionComponent={Zoom}
												title="Change Status"
												placement="top"
												arrow
											>
												<label className="switch">
													<input type="checkbox" defaultChecked />
													<span className="slider round"></span>
												</label>
											</Tooltip>
										</td>
									</tr>
									<tr className="row100">
										<td className="column100 column1">14</td>
										<td className="column100 column2 ">cavin Letini</td>
										<td className="column100 column3">cavinL@78gmail.com</td>
										<td className="column100 column4">4</td>
										<td className="column100 column5">United States</td>
										<td className="column100 column6">--</td>
										<td className="column100 column7">
											<Tooltip
												TransitionComponent={Zoom}
												title="Change Status"
												placement="top"
												arrow
											>
												<label className="switch">
													<input type="checkbox" defaultChecked />
													<span className="slider round"></span>
												</label>
											</Tooltip>
										</td>
									</tr>
									<tr className="row100">
										<td className="column100 column1">15</td>
										<td className="column100 column2 ">cavin Letini</td>
										<td className="column100 column3">cavinL@78gmail.com</td>
										<td className="column100 column4">4</td>
										<td className="column100 column5">United States</td>
										<td className="column100 column6">--</td>
										<td className="column100 column7">
											<Tooltip
												TransitionComponent={Zoom}
												title="Change Status"
												placement="top"
												arrow
											>
												<label className="switch">
													<input type="checkbox" defaultChecked />
													<span className="slider round"></span>
												</label>
											</Tooltip>
										</td>
									</tr>
									<tr className="row100">
										<td className="column100 column1">16</td>
										<td className="column100 column2 ">cavin Letini</td>
										<td className="column100 column3">cavinL@78gmail.com</td>
										<td className="column100 column4">4</td>
										<td className="column100 column5">United States</td>
										<td className="column100 column6">--</td>
										<td className="column100 column7">
											<Tooltip
												TransitionComponent={Zoom}
												title="Change Status"
												placement="top"
												arrow
											>
												<label className="switch">
													<input type="checkbox" defaultChecked />
													<span className="slider round"></span>
												</label>
											</Tooltip>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReportTable;
