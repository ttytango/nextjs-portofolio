import Image from "next/image";
import styles from "./footer.module.scss";

export default function Footer() {
	const github = "https://github.com/ttytango";
	const linkedIn = "https://www.linkedin.com/in/tim-simonson-6513441b1/";
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<h4>Tim Simonson 2021</h4>
					<div className={styles.footerLinks}>
						<a href={github}><Image src={"/icons/" + "github.svg"} alt="Github" height={64} width={64} /></a>
						<a href={linkedIn}><Image src={"/icons/" + "linkedin.svg"} alt="Github" height={64} width={64} /></a>
					</div>
				</div>

		</footer>
	);
}
