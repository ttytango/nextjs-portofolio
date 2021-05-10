import { useState, useRef } from "react";
import styles from "./string-format-form.module.scss";
import Button from "../ui/button";

export default function StringCapitaliseForm() {
	const inputWorldRef = useRef();
	const [world, setWorld] = useState("World");
	function handleSubmit(event) {
		event.preventDefault();
		if (inputWorldRef.current.value <= 1) {
			return alert("Please enter more than 1 character");
		}
		const inputtedWorld = inputWorldRef.current.value.toLowerCase();

		function capitalisedWorlds() {
			const words = inputtedWorld.split(" ");
			let newWords = "";
			for (let i = 1; i < words.length; i++) {
				newWords += " " + words[i][0].toUpperCase() + words[i].slice(1);
			}
			const capitalisedWorldOne =
				inputtedWorld[0].toUpperCase() + words[0].slice(1);
			setWorld(capitalisedWorldOne + newWords);
		}
		capitalisedWorlds();
	}

	return (
		<div className={styles.form}>
			<h1>Hello {world}</h1>
			<h2>Next Input Form</h2>
			<form onSubmit={handleSubmit}>
				<div className={styles.formControl}>
					<label htmlFor="world">Enter your Name: </label>
					<input type="text" id="world" ref={inputWorldRef} />
					<Button>Submit</Button>
				</div>
			</form>
		</div>
	);
}
