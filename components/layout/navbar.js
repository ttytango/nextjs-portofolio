import Link from "next/link";
import styles from "./navbar.module.scss";

export default function Navbar() {
	return (
		<header className={styles.header}>
			<div className={styles.brand}>
				<Link href="/">TJ Simonson</Link>
			</div>
			<nav>
				<ul className={styles.topNavButtons}>
					<li>
						<Link href="/techstack">Skills and Tech Stack</Link>
					</li>
					<li>
						<Link href="/projects">Browse All Projects</Link>
					</li>
					<li>
						<Link href="/contact-me">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
