import React, { useState, useEffect } from "react";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { TypeAnimation } from "react-type-animation";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";

import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/homepage.css";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-container">
						<div
							className="homepage-first-area"
							style={{
								backgroundImage: "url(/background.png)",
								backgroundRepeat: "no-repeat",
								backgroundSize: "contain",
							}}
						>
							<div className="homepage-first-area-left-side">
								<h3>Angelica Zachowski</h3>
								<div className="title homepage-title">
									<TypeAnimation
										sequence={[
											"UX", // Types 'One'
											1000, // Waits 1s
											"UX/", // Deletes 'One' and types 'Two'
											1000, // Waits 2s
											"UX/UI", // Types 'Three' without deleting 'Two'
											1000,
											"UX/UI Developer", // Types 'Three' without deleting 'Two'
											1000,
											"UX/UI", // Types 'Three' without deleting 'Two'
											1000,
											"UX/", // Types 'Three' without deleting 'Two'
											1000,
											"UX", // Types 'Three' without deleting 'Two'
											1000,
											"", // Types 'Three' without deleting 'Two'
										]}
										wrapper="span"
										cursor={true}
										repeat={Infinity}
										style={{
											fontSize: "2em",
											display: "inline-block",
										}}
									/>
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-projects">
							<AllProjects />
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

export default Homepage;
