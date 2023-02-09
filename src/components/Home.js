import React from "react";
import IntroAnimation from "./IntroAnimation";
import { Github, Youtube, Linkedin } from "react-feather";
import { Link } from "react-router-dom";

const Intro = () => (
	<div className="intro-wrapper">
		<div className="title-wrapper">
			<h1 className="title">Simo Edwin</h1>
			<h2 className="subtitle">Fullstack Web Developer</h2>
		</div>
		<div className="social-wrapper">
			<Link to="#" target="_blank">
				<Github color="#EFEFEF" size="48" className="social-links" />
			</Link>
			<Link to="#" target="_blank">
				<Youtube color="#EFEFEF" size="48" className="social-links" />
			</Link>
			<Link to="#" target="_blank">
				<Linkedin color="#EFEFEF" size="48" className="social-links" />
			</Link>
		</div>
		<IntroAnimation />
	</div>
);

export default Intro;
