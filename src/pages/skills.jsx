import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import "./styles/skills.css";
import "nes.css/css/nes.min.css";

const Skills = () => {
	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="skills" />
				<div className="content-wrapper">
					<div className="contact-container">
						<div className="title contact-title nes-text is-primary">
							My Skills
						</div>
						<div className="section-content-container">
							<br />
							<div className="container-skills">
								<h3 className="title-skills">Languages</h3>
								<div className="skill-box">
									<p>CSS</p>
									<p>HTML</p>
									<p>JavaScript</p>
									<p>SASS</p>
									<p>C</p>
								</div>
							</div>
							<div className="container-skills">
								<h3 className="title-skills">
									Frameworks + Technologies
								</h3>
								<div className="skill-box">
									<p>React</p>
									<p>Matlab</p>
									<p>JQuery</p>
									<p>Node.js</p>
								</div>
							</div>
							<div className="container-skills">
								<h3 className="title-skills">
									Tools + Platforms
								</h3>
								<div className="skill-box">
									<p>Bootstrap</p>
									<p>Figma</p>
									<p>Notion</p>
									<p>Jira</p>
									<p>Netlify</p>
									<p>GitHub</p>
								</div>
							</div>
							<div className="container-skills">
								<h3 className="title-skills">Other</h3>
								<div className="skill-box">
									<p>Fluent in Polish</p>
									<p>Microsoft Office</p>
								</div>
							</div>
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

export default Skills;
