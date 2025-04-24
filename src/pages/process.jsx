import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import statsImage from "../images/stats2.png";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/process.css";

const ScrollNav = () => {
	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};
};

const Process = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="process-container">
						<div className="title projects-title">Mood App</div>
						<div className="process-header">
							<a
								href="https://angelica-zach.github.io/mood-match/"
								class="project-link"
							>
								See Project
							</a>
						</div>
						<div className="steps">
							<button onClick={() => scrollToSection("discover")}>
								<div className="icon-container">
									<FontAwesomeIcon icon={faMagnifyingGlass} />
									<span>Discover</span>
								</div>
							</button>
							<button onClick={() => scrollToSection("design")}>
								<div className="icon-container">
									<FontAwesomeIcon icon={faBookOpen} />
									<span>Design</span>
								</div>
							</button>

							<button onClick={() => scrollToSection("develop")}>
								<div className="icon-container">
									<FontAwesomeIcon icon={faCode} />
									<span>Develop</span>
								</div>
							</button>

							<button onClick={() => scrollToSection("deliver")}>
								<div className="icon-container">
									<FontAwesomeIcon icon={faCheck} />
									<span>Deliver</span>
								</div>
							</button>
							<section id="discover">
								<div
									className="container-fluid maintext d-flex align-items-center justify-content-center"
									style={{ height: "25vh", width: "100%" }}
								>
									<h2>Discover</h2>
								</div>

								<div
									className="container align-items-center mt-4"
									style={{ width: "60%" }}
								>
									<div className="pb-4">
										<h4 className="subheading fs-6 font-monospace">
											SECONDARY RESEARCH
										</h4>
										<br />
										<h3 className="display-3 question">
											When do people listen to music?
										</h3>
										<p className="p-3">
											The starting point was to do some
											research to see what issues people
											were having when it came to picking
											music to listen to.
										</p>

										<p className="p-3">
											Secondary research has shown a
											challenge in the struggle to curate
											tailored music to a mood. The
											findings reveal that individuals
											possess a variety of music tastes
											but often struggle to discover new
											artists. This insight underscores
											the significance of designing a
											music app that not only facilitates
											easy song picking but also provides
											users with the ability to find
											concerts for artists they enjoy.
										</p>
										<div className="d-flex justify-content-center">
											<img
												className=""
												src={statsImage}
												alt="music statistics"
												style={{ width: "50%" }}
											/>
										</div>
									</div>

									<div className="pb-4">
										<h4 className="subheading fs-6 font-monospace">
											PROBLEM STATEMENT
										</h4>
										<br />
										<h3 className="display-3 question">
											What is the actual problem?
										</h3>
										<p className="p-3">
											Although personal music curation
											already exists, people are unhappy
											with it and feel it does not offer
											enough variety and additional
											features.
										</p>
									</div>

									<div className="pb-4">
										<h4 className="subheading fs-6 font-monospace pt-2">
											PRIMARY RESEARCH
										</h4>
										<h3 className="display-4 question">
											Speaking to users to understand the
											problem
										</h3>
										<p className="p-3">
											To get a deeper understanding of the
											users' needs I have decided that the
											best method would be to conduct user
											interviews to hear about their
											experiences. This allowed me to ask
											them follow-up questions to go into
											more detail about their experiences.
											For this primary research, I will be
											interviewing 3 people to get an
											insight into what their desires and
											struggles are.
										</p>

										<p className="p-3">
											Below are some of the people that I
											have interviewed along with quotes
											from an affinity map.
										</p>

										<div className="d-flex justify-content-center pt-3">
											<div className="row gy-5 justify-content-between align-content-center">
												<div className="col text-center">
													<i
														className="fa-regular fa-user pink"
														aria-hidden="true"
													></i>
													<h4>Katie</h4>
													<p>
														It's hard to find music
														I want to listen to in
														the moment
													</p>
												</div>
												<div className="col text-center">
													<i
														className="fa-regular fa-user purple"
														aria-hidden="true"
													></i>
													<h4>Lauren</h4>
													<p>
														I wish I could access
														more features from my
														music to make it a more
														holistic experience
													</p>
												</div>
												<div className="col text-center">
													<i
														className="fa-regular fa-user green"
														aria-hidden="true"
													></i>
													<h4>Alex</h4>
													<p>
														I want to discover more
														new artists
													</p>
												</div>
											</div>
										</div>
									</div>

									<div className="pb-4">
										<h4 className="subheading fs-6 font-monospace">
											KEY THEMES
										</h4>
										<br />
										<h3 className="display-4 question">
											Finding + identifying themes
										</h3>
										<p className="p-3">
											After interviewing users and
											arranging their feelings into an
											affinity map, I decided to connect
											some themes that were common to the
											users together to get to the cause
											of their points.
										</p>
									</div>

									<div className="card-group justify-content-evenly ps-2 pe-2">
										<div
											className="card rounded-0"
											style={{ maxWidth: "300px" }}
										>
											<div className="card-body">
												<h5 className="card-title fw-bold fs-3">
													Mood selection
												</h5>
												<p className="card-text text-center">
													Users found it hard to
													self-describe their mood
												</p>
											</div>
										</div>
										<div
											className="card rounded-0"
											style={{ maxWidth: "300px" }}
										>
											<div className="card-body">
												<h5 className="card-title fw-bold fs-3">
													Functions
												</h5>
												<p className="card-text text-center">
													Users wanted more
													functionality from their
													music
												</p>
											</div>
										</div>
									</div>
								</div>
							</section>

							<div id="design" className="group"></div>
							<div id="develop" className="group"></div>
							<div id="deliver" className="group"></div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Process;
