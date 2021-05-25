import Image from "next/image";

import styles from "./about-me.module.scss";
function AboutMe() {
	return (
		<section className={styles.homeContent}>
			{/* <div className={styles.textContainer}> */}
			<div className={styles.textContainer}>
				<h1>Timothy Simonson</h1>
				<h2>Web Developer</h2>
				<Image src={"/images/ttylogo.png"} width={320} height={320} />
				<p>
					Having come from a background in academia, where I specialised in
					Southeast Asian politics, I moved into the realm of programming around
					the beginning of 2020. Although I did delve for some months into R for
					quantitative data analysis a few years beforehand, I have since taken
					a deeper plunge into web development.
				</p>
				<p>

						My immediate goals are to boost my knowledge of modern Frontend Web
						Development to enter into the tech industry, and build upon
						knowledge of what I already know.
					</p>
				<p>
					Prior to starting the bootcamp at _Nology in order to attain these
					goals in early October 2020, I had already taught myself a great deal
					of Python, eventually teaching myself the Django framework and Django
					REST Framework for building API's. I have since moved towards using
					ExpressJS and NextJS for this.
				</p>
			</div>
			{/* </div> */}
		</section>
	);
}

export default AboutMe;
