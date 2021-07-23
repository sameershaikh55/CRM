import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { ImCross, ImLink } from "react-icons/im";
import Button from "@material-ui/core/Button";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const BioLink = ({ openBio, setOpenBio }) => {
	const handleClose = () => {
		setOpenBio(false);
	};

	return (
		<div className="bio_link_container">
			<Dialog
				open={openBio}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">
					<div className="d-flex justify-content-between align-items-center">
						<h5>
							<span className="borderBottom">Create bio</span>link page
						</h5>
						<div>
							<ImCross
								onClick={handleClose}
								className="pointer"
								fontSize="1rem"
							/>
						</div>
					</div>
				</DialogTitle>
				<DialogContent className="pb-2">
					<DialogContentText id="alert-dialog-slide-description">
						<div className="d-flex align-items-center mt-1">
							<ImLink className="me-1 text-dark" />
							<div className="text-secondary">Biolink URL</div>
						</div>
						<div
							style={{ border: "1px solid #ccc", height: "36px" }}
							className="d-none d-sm-flex rounded-3 my-1"
						>
							<p
								style={{ background: "#ededed" }}
								className="mb-0 small d-flex align-items-center px-2 h-100"
							>
								https://test.minilink.bio/
							</p>
							<input
								style={{ fontSize: "0.9rem" }}
								type="text"
								placeholder="your-custom-alias"
								className="border-0 border-start ps-3 pe-1 w-100"
							/>
						</div>
						<div
							style={{ border: "1px solid #ccc", height: "70px" }}
							className="d-flex d-sm-none flex-column rounded-3 my-1"
						>
							<p
								style={{ background: "#ededed" }}
								className="mb-0 small d-flex align-items-center px-2 h-100"
							>
								https://test.minilink.bio/
							</p>
							<input
								style={{ fontSize: "0.9rem" }}
								type="text"
								placeholder="your-custom-alias"
								className="border-0 border-start ps-3 pe-1 h-100"
							/>
						</div>
						<p style={{ fontSize: "12px" }} className="small fw-bold mb-2">
							Leave empty for a random generated one.
						</p>
						<div className="w-100 mt-4">
							<Button
								variant="contained"
								color="primary"
								href="#contained-buttons"
								className="text-white w-100"
							>
								Create biolink page
							</Button>
						</div>
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default BioLink;
