// import { config, library } from "@fortawesome/fontawesome-svg-core";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../components/layout/layout";
import "../styles/globals.scss";
// config.autoAddCss = false;

// library.add(fab, faEnvelope);

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
