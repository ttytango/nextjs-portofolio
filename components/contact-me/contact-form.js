import { useRef } from "react";
import styles from "./contact-form.module.scss";
import Button from "../ui/button";

function ContactForm() {
	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const descriptionInputRef = useRef();
	return (
		<form className={styles.contactForm}>
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
			<div className={styles.control}>
				{/* <label htmlFor="description"></label> */}
				<textarea
					rows="5"
					cols="80"
					id="description"
					placeholder="Please enter your enquiry"
					ref={descriptionInputRef}
				/>
			</div>
			<div className={styles.submitFormButton}>
				<Button>Submit Form</Button>
			</div>
		</form>
	);
}

export default ContactForm;
