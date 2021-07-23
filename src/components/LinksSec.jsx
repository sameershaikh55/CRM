import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import { FiDownload } from "react-icons/fi";
import { FaFilter, FaHashtag, FaChartBar, FaEdit } from "react-icons/fa";
import { IoIosAddCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { BiCalendar } from "react-icons/bi";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineBarChart, AiOutlineQrcode } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { GoPrimitiveDot } from "react-icons/go";
import BioLink from "./BioLink";
import ShortUrl from "./ShortUrl";

const options = [
	{
		i: <FaEdit />,
		t: "Edit",
	},
	{
		i: <AiOutlineBarChart />,
		t: "Statistics",
	},
	{
		i: <AiOutlineQrcode />,
		t: "QR Code",
	},
	{
		i: <ImCross fontSize="0.9rem" />,
		t: "Delete",
	},
];

const ITEM_HEIGHT = 48;

const CreateBtn = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [openBio, setOpenBio] = useState(false);
	const [openBio2, setOpenBio2] = useState(false);

	const handleClickOpen = () => {
		setOpenBio(true);
	};
	const handleClickOpen2 = () => {
		setOpenBio(true);
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setOpenBio(true);
	};
	const handleClose2 = () => {
		setAnchorEl(null);
		setOpenBio2(true);
	};
	return (
		<>
			<BioLink
				openBio={openBio}
				setOpenBio={setOpenBio}
				handleClickOpen={handleClickOpen}
			/>
			<ShortUrl
				openBio2={openBio2}
				setOpenBio2={setOpenBio2}
				handleClickOpen2={handleClickOpen2}
			/>
			<div>
				<Button
					className="btn rounded-pill mt-1"
					variant="contained"
					aria-controls="simple-menu"
					aria-haspopup="true"
					onClick={handleClick}
				>
					<IoIosAddCircle className="h5 mb-0 me-1" />
					Create link
				</Button>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose} className="d-flex align-items-center">
						<GoPrimitiveDot
							fontSize="1.5rem"
							color=" #222870"
							className="me-1"
						/>{" "}
						Biolink page
					</MenuItem>
					<MenuItem
						onClick={handleClose2}
						className="d-flex align-items-center"
					>
						<GoPrimitiveDot
							fontSize="1.5rem"
							color=" #222870"
							className="me-1"
						/>{" "}
						Shortened URL
					</MenuItem>
				</Menu>
			</div>
		</>
	);
};

const DownloadBtn = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<div>
				<Button
					className="outlinedBtn rounded-circle mt-1"
					variant="outlined"
					aria-controls="simple-menu"
					aria-haspopup="true"
					onClick={handleClick}
				>
					<FiDownload fontSize="1.2rem" color="#424ede" />
				</Button>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose} className="d-flex align-items-center">
						Export to CSV
					</MenuItem>
					<MenuItem onClick={handleClose} className="d-flex align-items-center">
						Export to JSON
					</MenuItem>
				</Menu>
			</div>
		</>
	);
};

const FilterBtn = () => {
	const [filterBtn, setFilterBtn] = useState(false);
	return (
		<>
			<div className="position-relative">
				<button
					className="outlinedBtn2 rounded-circle mt-1 bg-transparent"
					onClick={() => setFilterBtn(!filterBtn)}
				>
					<FaFilter fontSize="0.9rem" color="#424ede" />
				</button>
				{filterBtn && (
					<div className="filteration position-absolute">
						<h5 className="px-4 pt-2 pb-0 mb-0">
							<span className="borderBottom">Filt</span>ers
						</h5>
						<hr className="my-1" />
						<div className="px-4 pt-2 pb-2">
							<div className="mb-3">
								<label htmlFor="">Search</label>
								<input
									type="text"
									name=""
									id=""
									className="w-100 rounded-3 border-1 px-1"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="">Search by</label>
								<br />
								<select className="w-100 rounded-3 border-1 px-1">
									<option value="0">Short Url</option>
								</select>
							</div>
							<div className="mb-3">
								<label htmlFor="">Status</label>
								<br />
								<select className="w-100 rounded-3 border-1 px-1">
									<option value="0">All</option>
									<option value="0">Active</option>
									<option value="0">Disabled</option>
								</select>
							</div>
							<div className="mb-3">
								<label htmlFor="">
									Project{" "}
									<span style={{ fontSize: "0.7rem" }} className="small ms-3">
										Create Project
									</span>{" "}
								</label>
								<br />
								<select className="w-100 rounded-3 border-1 px-1">
									<option value="0">All</option>
									<option value="0">Active</option>
									<option value="0">Disabled</option>
								</select>
							</div>
							<div className="mb-3">
								<label htmlFor="">Type</label>
								<br />
								<select className="w-100 rounded-3 border-1 px-1">
									<option value="0">All</option>
									<option value="0">Biolink pages</option>
									<option value="0">Shortened URLs</option>
								</select>
							</div>
							<div className="mb-3">
								<label htmlFor="">Order by</label>
								<br />
								<select className="w-100 rounded-3 border-1 px-1">
									<option value="0">Created datetime</option>
									<option value="0">Clicks</option>
									<option value="0">Short URL</option>
								</select>
							</div>
							<div className="mb-3">
								<label htmlFor="">Order type</label>
								<br />
								<select className="w-100 rounded-3 border-1 px-1">
									<option value="0">Ascending</option>
									<option value="0">Descending</option>
								</select>
							</div>
							<div className="mb-3">
								<label htmlFor="">Results per page</label>
								<br />
								<select className="w-100 rounded-3 border-1 px-1">
									<option value="0">10</option>
									<option value="0">15</option>
									<option value="0">20</option>
									<option value="0">25</option>
								</select>
							</div>
							<div className="mb-3 w-100">
								<Button variant="contained" className="btn w-100">
									Submit
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

const LinksSec = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<div className="links_container mt-5">
				<div className="page_container">
					<div className="container-fluid">
						<div className="d-flex flex-column flex-md-row justify-content-between align-md-items-center">
							<h1 className="dark">Links</h1>
							<div className="links_btn_container d-flex align-items-center">
								<div>
									<CreateBtn />
								</div>
								<div className="ms-3">
									<DownloadBtn />
								</div>
								<div className="ms-3">
									<FilterBtn />
								</div>
								{/* <button className="btn ms-3">
									<FaFilter />
								</button> */}
							</div>
						</div>

						<div className="row">
							{[1, 1].map((prev) => {
								return (
									<div className="col-12 mt-4">
										<div className="linkRow ps-3 pe-1 ps-md-4 pe-md-3 py-3">
											<div className="d-flex justify-content-between align-items-center">
												<div className="d-flex align-items-center">
													<div className="hastageIcon rounded-circle me-3">
														<FaHashtag color="#fff" />
													</div>
													<div>
														<h6 className="mb-0">page-test</h6>
														<div className="elipsesLink text-secondary small d-flex align-items-center mt-1">
															<IoIosArrowDroprightCircle
																color="#bbbbbb"
																fontSize="1.2rem"
																className="me-1"
															/>{" "}
															https://test.minilink.bio/page-test
														</div>
													</div>
												</div>
												<div className="d-flex align-items-center small">
													<div className="graphNumber mt-1 d-none d-md-flex align-items-center">
														<FaChartBar className="me-1" /> 2
													</div>
													<div className="d-none d-md-flex align-items-center ms-5 text-secondary">
														<BiCalendar fontSize="0.95rem" />
														<span className="small ms-1 mb-0">
															13 July, 2021
														</span>
													</div>
													<div className="ms-3 ms-md-5">
														<label className="switch">
															<input type="checkbox" defaultChecked />
															<span className="slider round"></span>
														</label>
													</div>
													<div className="ms-3 ms-md-5">
														<IconButton
															aria-label="more"
															aria-controls="long-menu"
															aria-haspopup="true"
															onClick={handleClick}
														>
															<BiDotsVerticalRounded />
														</IconButton>
														<Menu
															id="long-menu"
															anchorEl={anchorEl}
															keepMounted
															open={open}
															onClose={handleClose}
															PaperProps={{
																style: {
																	maxHeight: ITEM_HEIGHT * 4.5,
																	width: "20ch",
																},
															}}
														>
															{options.map((option, i) => (
																<MenuItem
																	key={option.t}
																	selected={option === "Pyxis"}
																	onClick={handleClose}
																	className="d-flex align-items-center"
																>
																	<div>{option.i}</div>
																	<div
																		style={{ marginTop: "4px" }}
																		className="ms-2"
																	>
																		{option.t}
																	</div>
																</MenuItem>
															))}
														</Menu>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LinksSec;
