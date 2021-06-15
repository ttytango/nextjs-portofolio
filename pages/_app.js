
import Head from "next/head";
import Layout from "../components/layout/layout";
import "../styles/globals.scss";


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
