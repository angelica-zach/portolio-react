import React, { useEffect, useState } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import "./styles/skills.css";

const Skills = () => {
	const items = [
		{
			title: "Languages",
			content: ["CSS", "HTML", "JavaScript", "SASS", "C"],
		},
		{
			title: "Frameworks + Technologies",
			content: ["Node.js", "React", "JQuery", "Matlab"],
		},
		{
			title: "Tools + Platforms",
			content: [
				"Bootstrap",
				"Figma",
				"Notion",
				"Jira",
				"Netlify",
				"GitHub",
				"Hubspot",
				"Eventmaker",
			],
		},
		{
			title: "Other",
			content: ["Fluent in Polish", "Microsoft office"],
		},
	];

	const [openIndex, setOpenIndex] = useState(null);
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const toggleContent = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="skills" />
				<div className="content-wrapper">
					<div className="contact-container skill-container">
						<div className="title skills-title">My Skills</div>
						<div className="section-content-container">
							<br />
							{/* <div className="container-skills">
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
							</div> */}
							{items.map((item, index) => (
								<div
									key={index}
									onClick={() => toggleContent(index)}
									onMouseEnter={() => setHoveredIndex(index)}
									onMouseLeave={() => setHoveredIndex(null)}
									style={{
										cursor: "pointer",
										marginBottom: "10px",
										padding: "10px",
										borderRadius: "4px",
										transition: "all 0.3s ease",
										display: "flex",
										alignItems: "center",
									}}
								>
									<div className="container-skills">
										<h3 className="title-skills">
											<span
												style={{ marginRight: "8px" }}
											>
												{hoveredIndex === index
													? "➤"
													: ""}
											</span>
											{item.title}
										</h3>
										{openIndex === index && (
											<div className="skill-box">
												{item.content.map((para, i) => (
													<p key={i}>{para}</p>
												))}
											</div>
										)}
									</div>
								</div>
							))}
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
