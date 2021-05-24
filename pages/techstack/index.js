import { Fragment } from "react";
import Head from "next/head";
import styles from "./techstack.module.scss";
import LogoCardList from "../../components/ui/logo-card-list";

export default function TechStackPage() {
	return (
		<Fragment>
			<Head>
				<title>TJ Simonson | Tech Stack</title>
				<meta name="description" content="Tech Tools Page" />
			</Head>
			<section className={styles.techStackContent}>
				<LogoCardList />
			</section>
		</Fragment>
	);
}
