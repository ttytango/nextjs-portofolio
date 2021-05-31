import React from "react";

import styles from "./logo-card-list.module.scss";
import LogoCard from "./small-card";
const skills = [
	{
		id: "1",
		name: "HTML 5",
		icon: "/images/html-5.svg",
		description: "I write semantic, readable and optimised HTML5.",
	},
	{
		id: "2",
		name: "CSS 3",
		icon: "/images/css-3.svg",
		description: "I am a proficient CSS stylist! Although I generally transpile it from SCSS.",
	},
	{
		id: "3",
		name: "Javascript",
		icon: "/images/javascript.svg",
		description:
			"I am an accomplished user of Javascript, utilising VanillaJS and a variety of JS frameworks and libraries, including JQuery",
	},
	{
		id: "4",
		name: "Python",
		icon: "/images/python.svg",
		description:
			"I am an advanced user of Python, and particularly enjoy using the Django framework for full-stack web development.",
	},
	{
		id: "5",
		name: "SASS/SCSS",
		icon: "/images/sass.svg",
		description:
			"I use SCSS in projects of all sizes as my principle CSS transpiler.",
	},
	{
		id: "6",
		name: "React",
		icon: "/images/react.svg",
		description:
			"React is now my go-to Javascript library for creating SPA's. I am particularly adept with using modern React Hooks, and more recently, I have learnt to use the related NextJS framework. Yes, this is indeed the first full website I have built using the NextJS.",
	},
	{
		id: "7",
		name: "NodeJS",
		icon: "/images/node.svg",
		description:
			"I use NodeJS and Express and am advanced in the use of related technologies and frameworks for both backend tasks and full-stack development.",
	},
	{
		id: "8",
		name: "Git",
		icon: "/images/git-black.svg",
		description:
			"I competently and frequently use git and the git bash command line as an effective Version Control System and for collaboration.",
	},
	{
		id: "9",
		name: "Svelte",
		icon: "/images/svelte.svg",
		description:
			"Svelte is a unique, reactive Javascript web framework that is incredibly lightweight and surprisingly powerful. I often use Svelte and the related Sapper framework, which is built on Svelte, but is still very much in development, for prototyping.",
	},
	{
		id: "10",
		name: "Bootstrap",
		icon: "/images/bootstrap-5.svg",
		description:
			"I am familiar with employing the use of third-party CDN's and several UI libraries including Bootstrap, Semantic-UI and FontAwesome among others to optimise client-side loading speed. Why re-invent the wheel?",
	},
	{
		id: "11",
		name: "Linux/Ubuntu",
		icon: "/images/cof_orange_hex.svg",
		description: "Although I use Windows most of the time, I also love using Linux and multiple Unix-like distros, particularly Debian-based distros. I'm often found playing around with all kinds of distros on my Raspberry Pi!",
	},
	{
		id: "12",
		name: "NextJS",
		icon: "/images/vercel-edited.svg",
		description: "This is a recent addition to my toolbelt, and perhaps now my favourite greenfield framework!",
	},
];
export default function LogoCardList() {
	return (
		<section className={styles.cardList}>
			<h1 className={styles.title}>Frequently Used Tools</h1>
			{/*<div className={styles.cardList}>*/}
			<div className={styles.list}>
				{skills.map((skill) => {
					return (
						<LogoCard
							id={skill.id}
							key={skill.id}
							icon={skill.icon}
							title={skill.name}
							description={skill.description}
						/>
					);
				})}
			</div>
			{/*</div>*/}
		</section>
	);
}
