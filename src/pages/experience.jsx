import React, { useState, useEffect } from "react";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { TypeAnimation } from "react-type-animation";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";

import INFO from "../data/user";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./styles/experience.css";

const Experience = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="experience" />
				<div className="content-wrapper">
					<div className="experience-container">
						<VerticalTimeline>
							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								contentStyle={{
									background: "rgb(33, 150, 243)",
									color: "#fff",
								}}
								contentArrowStyle={{
									borderRight: "7px solid  rgb(33, 150, 243)",
								}}
								date="Apr 2024 - present"
								iconStyle={{
									background: "rgb(33, 150, 243)",
									color: "#fff",
								}}
								// icon={<WorkIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									UI Developer/Designer
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									Infopro Digital
								</h4>
								<p>
									Creative Direction, User Experience, Visual
									Design, Project Management, Team Leading
								</p>
							</VerticalTimelineElement>

							<VerticalTimelineElement
								className="vertical-timeline-element--education"
								date="October 2023 - Feb 2024"
								iconStyle={{
									background: "rgb(233, 30, 99)",
									color: "#fff",
								}}
								// icon={<SchoolIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									Front end Web development bootcamp
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									Certification
								</h4>
								<p>
									Creative Direction, User Experience, Visual
									Design
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className="vertical-timeline-element--education"
								date="20020 - 2023"
								iconStyle={{
									background: "rgb(233, 30, 99)",
									color: "#fff",
								}}
								// icon={<SchoolIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									BEng in Electrical and Electronic
									Engineering
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									2:1 , University of Warwick
								</h4>
								<p>
									Disertaion on 3C Silicon Carbide
									semiconductors{" "}
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								iconStyle={{
									background: "rgb(16, 204, 82)",
									color: "#fff",
								}}
								// icon={<StarIcon />}
							/>
						</VerticalTimeline>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experience;
