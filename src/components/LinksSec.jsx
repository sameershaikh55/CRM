import React from "react";
import Button from "@material-ui/core/Button";

import { FiDownload } from "react-icons/fi";
import { FaFilter, FaHashtag, FaChartBar } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { HiArrowCircleRight } from "react-icons/hi";

const LinksSec = () => {
	return (
		<div className="links_container mt-5">
			<div className="page_container">
				<div className="container-fluid">
					<div className="d-flex justify-content-between align-items-center">
						<h1 className="dark">Links</h1>
						<div className="links_btn_container">
							<Button className="btn rounded-pill" variant="contained">
								<IoIosAddCircle className="me-1" />
								Create link
							</Button>
							<button className="btn ms-3">
								<FiDownload fontSize="1.2rem" />
							</button>
							<button className="btn ms-3">
								<FaFilter />
							</button>
						</div>
					</div>

					<div className="row">
						<div className="col-12">
							<div>
								<div>
									<div>
										<FaHashtag />
									</div>
									<div>
										<h6>page-test</h6>
										<div>
											<HiArrowCircleRight /> https://test.minilink.bio/page-test
										</div>
									</div>
								</div>
								<div>
									<div>
										<FaChartBar /> 2
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LinksSec;
