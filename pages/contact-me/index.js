import { Fragment } from "react";
import Head from "next/head";
import styles from "./contact-me.module.scss";
// import Button from "../../components/ui/button";
import ContactForm from "../../components/contact-me/contact-form";
// import sendForm from "../api/contact-me";

export default function ContactPage() {
	// const {sendForm} = props;
	// function sendForm(event) {
	// 	event.preventDefault();
	// 	fetch('/api/contact-me', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify(
	// 			{
	// 				message: {
	// 					name: name,
	// 					email: email,
	// 					description: description
	// 				}
	// 			})
	// 	})
	//
	// 		.then((res) = res.json())
	// 		.then((data) => {console.log(data)});
	// 	// result.user => 'Ada Lovelace'
	// 	// console.log(result);
	// }
	// sendForm();
	// const nameInputRef = useRef();
	// const emailInputRef = useRef();
	// const descriptionInputRef = useRef();
	return (
		<Fragment>
			<Head>
				<title>Contact TJ Simonson</title>
				<meta name="description" content="Contact Page" />
			</Head>
			<section className={styles.contact}>
				<h1>Contact Me</h1>
				<ContactForm /*submitMessageHandler={sendForm} message={message}*/ />
				{/*<Modal>Hello</Modal>*/}
				{/* <form>
				<div className={styles.control}>
					<label htmlFor="name">Name: </label>
					<input
						type="text"
						id="name"
						ref={nameInputRef}
						placeholder="Please enter your name"
						required
					/>
				</div>
				<div className={styles.control}>
					<label htmlFor="email">Email Address: </label>
					<input
						type="email"
						id="email"
						ref={emailInputRef}
						placeholder="Please enter your email"
						required
					/>
				</div>
				<section className={styles.control}>
					{/* <label htmlFor="description"></label>
					<textarea
						rows="5"
						cols="80"
						id="description"
						placeholder="Please enter your enquiry"
						ref={descriptionInputRef}
					/>
				</div>
				<div>
					<Button>Submit Form</Button>
				</div>
			</form> */}
			</section>
		</Fragment>
	);
}
