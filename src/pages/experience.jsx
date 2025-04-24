import React, { useState, useEffect } from "react";

import { faGraduationCap, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
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
						<VerticalTimeline lineColor="#000000">
							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								contentStyle={{
									background: " #f4f4f4",
									color: "#000000",
									borderTop: "solid 1px rgb(84, 105, 47)",
								}}
								date="Apr 2024 - present"
								iconStyle={{
									background: "rgb(84, 105, 47)",
									color: "#fff",
								}}
								icon={<FontAwesomeIcon icon={faBriefcase} />}
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
								contentStyle={{
									background: " #f4f4f4",
									color: "#000000",
									borderTop: "solid 1px#DE3163",
								}}
								iconStyle={{
									background: "#DE3163",
									color: "#fff",
								}}
								icon={
									<FontAwesomeIcon icon={faGraduationCap} />
								}
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
								date="2020 - 2023"
								contentStyle={{
									background: " #f4f4f4",
									color: "#000000",
									borderTop: "solid 1px#DE3163",
								}}
								iconStyle={{
									background: "#DE3163",
									color: "#fff",
								}}
								icon={
									<FontAwesomeIcon icon={faGraduationCap} />
								}
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
									background: "#FF7833",
									color: "#fff",
								}}
								icon={<FontAwesomeIcon icon={faStar} />}
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
