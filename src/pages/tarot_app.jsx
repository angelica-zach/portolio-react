import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import FigmaEmbed from "react-figma-embed";
import "./styles/process.css";

const TarotApp = () => {
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
						<div className="title projects-title">Tarot App</div>
						<div className="process-header">
							<a
								href="https://www.figma.com/design/JrfNF0k1ASftLToLfa9gYT/Tarot-app?node-id=1-2&t=TDr1VzVZ5fYKqTVM-1"
								class="project-link"
							>
								See Full Figma with wireframes and completed
								pages
							</a>
							<a onClick={() => scrollToSection("prototype")}>
								or scroll to see user flows prototype
							</a>
						</div>
						<div className="container align-items-center mt-4">
							<div className="pb-4">
								<h4 className="subheading fs-6 font-monospace">
									Background
								</h4>
								<p className="p-3">
									I started this project as I wanted to test
									out working on a mobile app, as most of my
									experience has been designing for the web I
									decided to choose something that I
									personally would use , so I designed a tarot
									analyser and horoscope app - drawing off the
									popularity of apps such as co-star.
								</p>
								<p className="p-3">
									I used the dark green and pink / purple
									colours as these gave off the right image -
									I wanted the app to be sleek yet still give
									off a mystical element The logo and name
									also tie into the theme of spirituality and
									allow for a cool "eye opening" effect as the
									app loads- also providing feedback to the
									user about the loading state Recoleta and
									Sofia pro were used as fonts as these have
									good visual harmony and also gave off a bit
									of a witchy yet sleek feel to the app.I
									decided on 3 main sections , as the bottom
									nav bar is only wide enough for 3-4 buttons
									without becoming crowded, which would each
									light up as the page changes to indicate
									where the user currently is in the journey,
									in addition to this, there are a few sub
									pages which lead to the corresponding main
									page with a back button
								</p>
								<p className="p-3">
									The app would work by pulling in the
									meanings of the selected tarot cards ,and
									then provide these for the user to save them
									having to look it up themselves, which can
									be quite time consuming. There is also a
									section for users to be able to input their
									own notes and analysis for the reading, if
									anything from it resonates with their
									personal life. All the readings are saved
									with a date, so users can go back and check
									on past readings. The bottom nav bar is
									structured in a "P.ast , present, future"
									way , which allows users to pick up how to
									use the app quickly. If there were paid
									features, I would choose these to be the
									custom tarot card reading rather than the
									pre-set ones and also more horoscope
									analysis
								</p>
							</div>
							<div>
								<h4
									className="subheading fs-6 font-monospace"
									id="prototype"
								>
									User Flows
								</h4>
								{/* <iframe
									style="border: 1px solid rgba(0, 0, 0, 0.1);"
									width="800"
									height="450"
									loading="lazy"
									src="https://embed.figma.com/proto/JrfNF0k1ASftLToLfa9gYT/Tarot-app?node-id=36-303&p=f&scaling=min-zoom&content-scaling=fixed&page-id=36%3A283&starting-point-node-id=36%3A288&show-proto-sidebar=1&embed-host=share"
									allowfullscreen
								></iframe> */}
								<FigmaEmbed url="https://embed.figma.com/proto/JrfNF0k1ASftLToLfa9gYT/Tarot-app?node-id=36-303&p=f&scaling=min-zoom&content-scaling=fixed&page-id=36%3A283&starting-point-node-id=36%3A288&show-proto-sidebar=1&embed-host=share" />
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

export default TarotApp;
