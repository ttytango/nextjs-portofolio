import { Fragment } from "react";
import Head from "next/head";
import styles from "./contact-me.module.scss";
// import Button from "../../components/ui/button";
import ContactForm from "../../components/contact-me/contact-form";
// import sendForm from "../api/contact-me";

function ContactPage(props) {

	function sendFormHandler(messageData) {
		// event.preventDefault();
		fetch("/api/contact-me", {
			method: "POST",
			body: JSON.stringify(messageData),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
				if (response.ok) {
					return response.json();
				}
				return response.json().then((data) => {
					throw new Error(data.message || "Something went wrong!");
				});
			})
			.then((data) => {
				console.log("Submitted!");
			})
			.catch((error) => {
				console.log(error)
			})


	}

	return (
		<Fragment>
			<Head>
				<title>Contact TJ Simonson</title>
				<meta name="description" content="Contact Page" />
			</Head>
			<section className={styles.contact}>
				<h1>Contact Me</h1>
				<ContactForm sendForm={sendFormHandler} />
		
			</section>
		</Fragment>
	);
}

export async function getStaticProps(context) {

	return {
		props: {},
		revalidate: 1200,
	}


}


export default ContactPage;