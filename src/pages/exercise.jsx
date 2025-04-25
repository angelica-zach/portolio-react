import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

i;

import "./styles/process.css";

const Exercise = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// const scrollToSection = (id) => {
	// 	const section = document.getElementById(id);
	// 	if (section) {
	// 		section.scrollIntoView({ behavior: "smooth" });
	// 	}
	// };

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="process-container">
						<div className="title projects-title">Wellness App</div>
						<div className="process-header">
							<a
								href="https://group4-wellness-app.netlify.app/"
								class="project-link"
							>
								See Project
							</a>
						</div>
						<div className="container align-items-center mt-4">
							<div className="pb-4">
								<h4 className="subheading fs-6 font-monospace">
									Wireframe
								</h4>
								<br />

								<img
									className="pt-5"
									src="/Wellness_figma.png"
									alt="excercise wireframe"
									style={{ width: "80%" }}
								/>
							</div>
						</div>
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Exercise;
