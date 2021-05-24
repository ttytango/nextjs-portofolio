import { useRef } from "react";
import styles from "./contact-form.module.scss";
import Button from "../ui/button";

function ContactForm() {
	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const descriptionInputRef = useRef();

	function submitMessageHandler(event) {
		event.preventDefault();
		const nameInput = nameInputRef.current.value;
		const emailInput = emailInputRef.current.value;
		const descriptionInput = descriptionInputRef.current.value;
		const message = {
			name: nameInput,
			email: emailInput,
			description: descriptionInput,
		};
		console.log(message);
	}
	return (
		<form className={styles.contactForm} onSubmit={submitMessageHandler}>
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
			<hr />
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
			<hr />

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
				<Button>Submit</Button>
			</div>
		</form>
	);
}

export default ContactForm;
