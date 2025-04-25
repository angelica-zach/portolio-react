import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/process.css";

const Process = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

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
						</div>
						<section id="discover">
							<div
								className="container-fluid maintext d-flex align-items-center justify-content-center"
								style={{ height: "25vh", width: "100%" }}
							>
								<h2>Discover</h2>
							</div>

							<div className="container align-items-center mt-4">
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
										research to see what issues people were
										having when it came to picking music to
										listen to.
									</p>

									<p className="p-3">
										Secondary research has shown a challenge
										in the struggle to curate tailored music
										to a mood. The findings reveal that
										individuals possess a variety of music
										tastes but often struggle to discover
										new artists. This insight underscores
										the significance of designing a music
										app that not only facilitates easy song
										picking but also provides users with the
										ability to find concerts for artists
										they enjoy.
									</p>
									<div className="d-flex justify-content-center">
										<img
											className=""
											src="/stats2.png"
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
										Although personal music curation already
										exists, people are unhappy with it and
										feel it does not offer enough variety
										and additional features.
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
										experiences. This allowed me to ask them
										follow-up questions to go into more
										detail about their experiences. For this
										primary research, I will be interviewing
										3 people to get an insight into what
										their desires and struggles are.
									</p>

									<p className="p-3">
										Below are some of the people that I have
										interviewed along with quotes from an
										affinity map.
									</p>

									<div className="d-flex justify-content-center pt-3">
										<div className="row gy-5 justify-content-between align-content-center">
											<div className="col text-center">
												<i
													className="fas fa-user pink"
													aria-hidden="true"
												></i>
												<h4>Katie</h4>
												<p>
													It's hard to find music I
													want to listen to in the
													moment
												</p>
											</div>
											<div className="col text-center">
												<i
													className="fas fa-user purple"
													aria-hidden="true"
												></i>
												<h4>Lauren</h4>
												<p>
													I wish I could access more
													features from my music to
													make it a more holistic
													experience
												</p>
											</div>
											<div className="col text-center">
												<i
													className="fas fa-user green"
													aria-hidden="true"
												></i>
												<h4>Alex</h4>
												<p>
													I want to discover more new
													artists
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
										After interviewing users and arranging
										their feelings into an affinity map, I
										decided to connect some themes that were
										common to the users together to get to
										the cause of their points.
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
												Users wanted more functionality
												from their music
											</p>
										</div>
									</div>
								</div>
							</div>
						</section>

						<section id="design" className="group">
							<div
								className="container-fluid maintext d-flex align-items-center justify-content-center"
								style={{ height: "25vh", width: "100%" }}
							>
								<h2 className="fs-1 pt-1 font-monospace">
									Define
								</h2>
							</div>

							<div className="container align-items-center mt-4">
								{/* Persona Section */}
								<div className="pb-4">
									<h4 className="subheading fs-6 font-monospace">
										PERSONA
									</h4>
									<br />
									<h3 className="display-3 question">
										Crafting a persona
									</h3>
									<p className="p-3">
										The persona is based on a younger person
										(18-30) as they are more likely to seek
										out music on streaming platforms. The
										mentioned frustrations, goals, and
										behaviours are based on the interview
										findings and secondary research, and
										reflect issues that most consumers of
										music face.
									</p>
									<img
										className="pt-5"
										src="/user-profile.png"
										alt="persona"
										style={{ width: "80%" }}
									/>
								</div>

								{/* User Task Flow Section */}
								<div className="pb-4 pt-5">
									<h4 className="subheading fs-6 font-monospace">
										USER TASK FLOW
									</h4>
									<br />
									<h3 className="display-3 question">
										Understanding what a user wants
									</h3>
									<p className="p-3">
										Having created a user persona, I began
										to think of user stories and task flows
										for common functionalities.
									</p>

									{/* Task Flow 1 */}
									<img
										className="pt-5"
										src="/user-flow-1.jpg"
										alt="music Choice"
										style={{ width: "80%" }}
									/>
									<div className="border border-primary rounded p-3 mt-3">
										<h3 className="font-monospace">
											User Task Flow 1: Selecting a mood
										</h3>
										<p>
											The first task flow is to do with a
											user selecting a mood from a
											carousel of options.
										</p>
									</div>

									{/* Task Flow 2 */}
									<img
										className="pt-5"
										src="/user-flow-2.png"
										alt="touring"
										style={{ width: "80%" }}
									/>
									<div className="border border-primary rounded p-3 mt-3">
										<h3 className="font-monospace">
											User Task Flow 2: Tour Dates
										</h3>
										<p>
											The second flow is when artists
											appear, and a user can click on them
											to see upcoming tour dates. If they
											are not currently touring, the user
											is informed via a modal.
										</p>
									</div>
								</div>
							</div>
						</section>
						<section id="develop" className="group">
							<div
								className="container-fluid maintext d-flex align-items-center justify-content-center"
								style={{ height: "25vh", width: "100%" }}
							>
								<h2 className="fs-1 pt-1 font-monospace">
									Develop
								</h2>
							</div>

							{/* Content Section */}
							<div className="container align-items-center mt-4">
								{/* Wireframing */}
								<div className="pb-4">
									<h4 className="subheading fs-6 font-monospace">
										WIREFRAMING
									</h4>
									<br />
									<h3 className="display-3 question">
										UI Design
									</h3>
									<p className="p-3">
										After all the research was done and key
										areas were identified, it was time to
										create a polished user interface design
										prototype on Figma.
									</p>
									<img
										className=""
										src="/wireframe.png"
										alt="wireframe"
										style={{ width: "80%" }}
									/>
								</div>

								{/* Brand Imagery */}
								<div className="pb-4">
									<h4 className="subheading fs-6 font-monospace">
										BRAND IMAGERY
									</h4>
									<br />
									<h3 className="display-3 question">
										Design choices
									</h3>
									<p className="p-3">
										As the app is targeted at young people,
										particularly those up to date with
										trends, deciding on a uniform brand was
										important. This generation has grown up
										with internet advancements and now
										values a highly aesthetically beautiful
										site more than just a functional one. It
										had to be pleasing and friendly. Based
										on research of the latest trends (done
										by scrolling through popular social
										media platforms and seeing what kind of
										imagery was being used), I collated a
										vision board.
									</p>
									<img
										className=""
										src="/mood-board.png"
										alt="mood board"
										style={{ width: "80%" }}
									/>
								</div>
							</div>
						</section>

						<section className="deliver">
							{/* Header */}
							<div
								className="container-fluid maintext d-flex align-items-center justify-content-center"
								style={{ height: "25vh", width: "100%" }}
							>
								<h2 className="fs-1 pt-1 font-monospace">
									Deliver
								</h2>
							</div>

							{/* Content */}
							<div className="container align-items-center mt-4">
								{/* Wireframing */}
								<div className="pb-4">
									<h4 className="subheading fs-6 font-monospace">
										WIREFRAMING
									</h4>
									<br />
									<h3 className="display-3 question">
										DESIGN
									</h3>
									<p className="p-3">
										After all the research was done and key
										areas were identified, it was time to
										create a polished user interface design
										prototype on Figma.
									</p>
									<img
										src="/wireframe.png"
										alt="wireframe"
										style={{ width: "80%" }}
									/>
								</div>

								{/* Refinement */}
								<div className="pb-4">
									<h4 className="subheading fs-6 font-monospace">
										REFINEMENT
									</h4>
									<br />
									<h3 className="display-3 question">
										PALLETTE
									</h3>
									<img
										src="/Mood site pallete.png"
										alt="palette"
										style={{ width: "80%" }}
									/>
									<p>
										A palette was generated from inspiration
										from the mood board.
									</p>

									<br />
									<h3 className="display-3 question">
										HIGH FIDELITY DESIGN
									</h3>
									<p className="p-3">
										This then led to a higher fidelity,
										cleaner design, where elements were
										spread among pages.
									</p>
									<img
										src="/Main page.png"
										alt="Main Page"
										style={{ width: "80%" }}
									/>
									<img
										src="/Artists.png"
										alt="Artist Page"
										style={{ width: "80%" }}
									/>
									<img
										src="/Concerts.png"
										alt="Concert Page"
										style={{ width: "80%" }}
									/>
								</div>

								{/* Next Steps */}
								<div className="pb-4">
									<h4 className="subheading fs-6 font-monospace">
										NEXT STEPS
									</h4>
									<br />
									<h3 className="display-3 question">
										POSSIBLE IMPROVEMENTS?
									</h3>
									<ul className="p-3">
										<li>
											Adding a map API to show features
											near the concert venue e.g. cafes,
											bars
										</li>
										<li>
											Adding a recipe API to bring up
											recipes to do with mood
										</li>
										<li>Autoplay music</li>
									</ul>
								</div>
							</div>
						</section>
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
