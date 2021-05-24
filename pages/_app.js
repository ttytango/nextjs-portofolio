// import { config, library } from "@fortawesome/fontawesome-svg-core";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";
// import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../components/layout/layout";
import "../styles/globals.scss";
// config.autoAddCss = false;

// library.add(fab, faEnvelope);

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>TJ Simonson | Portfolio</title>
				<meta name="description" content="Timothy Simonson's Portfolio Site" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
