import React from "react";
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
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
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
					<GoPrimitiveDot fontSize="1.5rem" color=" #222870" className="me-1" />{" "}
					Biolink page
				</MenuItem>
				<MenuItem onClick={handleClose} className="d-flex align-items-center">
					<GoPrimitiveDot fontSize="1.5rem" color=" #222870" className="me-1" />{" "}
					Shortened URL
				</MenuItem>
			</Menu>
		</div>
	);
};

const LinksSec = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div className="links_container mt-5">
			<div className="page_container">
				<div className="container-fluid">
					<div className="d-flex justify-content-between align-items-center">
						<h1 className="dark">Links</h1>
						<div className="links_btn_container d-flex">
							<div>
								<CreateBtn />
							</div>
							{/* <Button className="btn rounded-pill" variant="contained">
								<IoIosAddCircle className="me-1" />
								Create link
							</Button> */}
							<button className="btn ms-3">
								<FiDownload fontSize="1.2rem" />
							</button>
							<button className="btn ms-3">
								<FaFilter />
							</button>
						</div>
					</div>

					<div className="row">
						{[1, 1].map((prev) => {
							return (
								<div className="col-12 mt-4">
									<div className="linkRow ps-4 pe-3 py-3">
										<div className="d-flex justify-content-between align-items-center">
											<div className="d-flex align-items-center">
												<div className="hastageIcon rounded-circle me-3">
													<FaHashtag color="#fff" />
												</div>
												<div>
													<h6 className="mb-0">page-test</h6>
													<div className="text-secondary">
														<IoIosArrowDroprightCircle
															color="#bbbbbb"
															fontSize="1.2rem"
														/>{" "}
														https://test.minilink.bio/page-test
													</div>
												</div>
											</div>
											<div className="d-flex align-items-center">
												<div className="graphNumber mt-1 d-flex align-items-center">
													<FaChartBar className="me-1" /> 2
												</div>
												<div className="d-fex align-items-center ms-5 text-secondary">
													<BiCalendar fontSize="0.95rem" />
													<span className="small ms-1 mb-0">13 July, 2021</span>
												</div>
												<div className="ms-5">
													<label className="switch">
														<input type="checkbox" defaultChecked />
														<span className="slider round"></span>
													</label>
												</div>
												<div className="ms-5">
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
	);
};

export default LinksSec;
