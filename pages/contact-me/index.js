import { useRef } from "react";
import styles from "./contact-me.module.scss";
import Button from "../../components/ui/button";
import Modal from "../../components/ui/modal";

export default function ContactPage() {
	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const descriptionInputRef = useRef();
	return (
		<div className={styles.contact}>
			<h1>Contact Me</h1>
			{/*<Modal>Hello</Modal>*/}
			<form>
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
				<div>
					<Button>Submit Form</Button>
				</div>
			</form>
		</div>
	);
}
