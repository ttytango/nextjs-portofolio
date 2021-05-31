import Head from "next/head";
import AboutMe from "../components/home/about-me";

export default function Home() {
	return (
		<div>
			<Head>
				<title>TJ Simonson | Portfolio</title>
				<meta
					name="description"
					content="Timothy Simonson's Web Design Portfolio Site"
				/>
			</Head>
			<div className="center">
				<AboutMe />
			</div>
		</div>
	);
}
