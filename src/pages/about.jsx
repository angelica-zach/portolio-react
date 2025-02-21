import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									I’m{" "}
									<span style={{ color: "#54692f" }}>
										Angelica Zachowski
									</span>
									. I live in London, where I am aspiring for
									a career in design .
								</div>

								<div className="subtitle about-subtitle">
									Welcome to my portfolio! I'm a passionate
									individual who embarked on a journey into
									web development following my graduation from
									the<b> University of Warwick</b> with a
									degree in{" "}
									<b>Electrical and Electronic Engineering</b>
									. While my academic background provided me
									with a strong analytical foundation, I
									craved an outlet for my creativity.
									<br />
									<br />
									Web development quickly captured my
									interest, offering the perfect blend of{" "}
									<b>creative expression</b> and{" "}
									<b>technical skills</b>. I discovered that
									it provided me with the opportunity to
									exercise control over the visual design of
									websites, ensuring they not only looked{" "}
									<b>aesthetically pleasing</b> but also{" "}
									<b>functioned seamlessly</b>. This resonated
									with me deeply, as I had long been
									fascinated by the principles outlined in
									"The Design of Everyday Things", a book that
									influenced my perspective on design and
									usability.
									<br />
									Outside of the digital realm, you'll often
									find me indulging in various hobbies, from
									crocheting new outfits to experimenting with
									new recipes in the kitchen. I also find
									solace in activities that promote
									mindfulness and well-being, such as
									practicing pilates or immersing myself in
									nature during walks (usually accompanied by
									a podcast).
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
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

export default About;
