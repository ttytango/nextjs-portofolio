import { useRef } from "react";
import styles from "./contact-form.module.scss";
import Button from "../ui/button";
// import sendForm from "../../pages/api/contact-me";

function ContactForm() {

	function sendForm(message) {
		// event.preventDefault();
		fetch('/api/contact-me', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(
				{message: message,
				})
		})

			.then((res) => res.json())
			.then((data) => {console.log(data)});
		// result.user => 'Ada Lovelace'
		// console.log(result);
	}

	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const descriptionInputRef = useRef();
	function onChange(event) {
		event.preventDefault();
	}
	function submitMessageHandler(event) {
		event.preventDefault();
		const nameInput = nameInputRef.current.value;
		const emailInput = emailInputRef.current.value;
		const descriptionInput = descriptionInputRef.current.value;
		const message = {
			name: nameInput,
			email: emailInput,
			description: descriptionInput,
		}
		// console.log(message);
		sendForm(message);
	}
		// console.log(message);

	return (
		<form className={styles.contactForm} onSubmit={submitMessageHandler} onChange={onChange}>
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
				 <label htmlFor="description" className={styles.descriptionLabel}>Enquiry:</label>
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
