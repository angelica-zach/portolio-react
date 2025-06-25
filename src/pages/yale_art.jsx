import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import "./styles/process.css";

const YaleArt = () => {
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
						<div className="title projects-title">
							Yale Art Redesign
						</div>
						<div className="process-header">
							<a
								href="https://www.figma.com/design/heZ5xp7cDFrERBil3UyhLG/Redesign-project---Yale-art?node-id=0-1&t=2nn6u08IFviFU3L2-1"
								class="project-link"
							>
								See full Figma with wireframes and completed
								site
							</a>
							<a onClick={() => scrollToSection("prototype")}>
								or scroll to see working prototype
							</a>
						</div>
						<div className="container align-items-center mt-4">
							<div className="pb-4">
								<h4 className="subheading fs-6 font-monospace">
									Background
								</h4>
								<p className="p-3">
									I picked this page to redesign as I wanted a
									challenge it was featured on the
									<a href="https://thomasdigital.com/bad-websites?source=post_page-----db7cfebd6091---------------------------------------">
										40 worst websites list
									</a>
									. Looking at the
									<a href="https://www.art.yale.edu/">
										original site
									</a>
									it was very cluttered and hard to navigate ,
									leading to accesibility issues.
								</p>
								<p className="p-3">
									Part of the reason for this cluttered look
									was that the site allows students to update
									pages with content and background images ,
									which I decided to keep, as the art school
									promotes creativity, but worked towards a
									solution that was easier to navigate and
									more visually appealing. To do this ,Ive
									maintained the functionality of students
									being able to change the background and add
									content blocks but swapped to a sleeker UI
									and the white on black / black on white text
									ensures that no matter what the background
									is , the text will still be legible - Ive
									also added in an option with either a black
									or white stroke encompassing each element to
									add even more contrast.
								</p>
								<p className="p-3">
									Ive also added in a more defined home and
									menu screen ,and expanded the footer to full
									width to allow easier site navigation - and
									added in thier logo to tie in the art
									schools branding.To align it with the main
									Yale school and site,Ive chnaged the font to
									more closely match the{" "}
									<a href="https://www.yale.edu/">
										main Yale webpage
									</a>{" "}
									, so that there is a clear brand identity
									link - The Yale font itself is behind a
									paywall and is only availbale for use by
									students and Alumni so I used Linux
									LIbertine which closely matches this. Ive
									also addded in some animations with the text
									to be more visually interesting. To help
									gather ideas for how to style this website,
									I looked at other art schools to see how
									they have laid out similar content. So, the
									redesign has cleared up the visual clutter
									whilst retaining the interactive element of
									the page (which is key as it is for an Art
									school) and allows visitor to be able to
									access key information eg. the courses
									easily
								</p>
							</div>
							<div className="pb-4">
								<h4
									className="subheading fs-6 font-monospace"
									id="prototype"
								>
									Working Protoype
								</h4>
								<iframe
									style={{
										border: "1px solid rgba(0, 0, 0, 0.1)",
									}}
									width="800"
									height="450"
									src="https://embed.figma.com/proto/heZ5xp7cDFrERBil3UyhLG/Redesign-project---Yale-art?node-id=75-1057&scaling=scale-down-width&content-scaling=fixed&page-id=75%3A807&embed-host=share"
									allowfullscreen
								></iframe>
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

export default YaleArt;
