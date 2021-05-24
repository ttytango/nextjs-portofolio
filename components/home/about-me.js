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
				<p>Some More Content</p>
			</div>
			{/* </div> */}
		</section>
	);
}

export default AboutMe;
