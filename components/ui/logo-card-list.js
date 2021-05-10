import React from 'react'

import styles from "./logo-card-list.module.scss";
import LogoCard from "./small-card";
const skills = [
	{
		id: "1",
		name: "HTML 5",
		icon: "/images/html-5.svg",
		description: "I am a proficient user of HTML5",
	},
	{
		id: "2",
		name: "Vercel",
		icon: "/images/css-3.svg",
		description: "Some Next Stuff",
	},
	{
		id: "3",
		name: "Javascript",
		icon: "/images/javascript.svg",
		description: "I am an accomplished user of javascript, using both Vanilla and a variety of JS frameworks and libraries.",
	},
	{
		id: "4",
		name: "Python",
		icon: "/images/python.svg",
		description: "I am an advanced user of Python, and particularly enjoy using the Django framework for full-stack web development.",
	},
	{
		id: "5",
		name: "SASS/SCSS",
		icon: "/images/sass.svg",
		description: "I use SCSS in projects of all sizes as my principle CSS transpiler.",
	},
	{
		id: "6",
		name: "React",
		icon: "/images/react.svg",
		description: "I absolutely love using React, and is my go-to Javascript library for creating SPA's. I am particularly adept with using modern React Hooks, and more recently, I have taught myself Server-Side Rendering using the related Next.JS framework. This is indeed the first website I have built using the NextJS.",
	},
	{
		id: "7",
		name: "NodeJS",
		icon: "/images/node.svg",
		description: "I use NodeJS and Express and am advanced in the use of related technologies and frameworks for both backend tasks and full-stack development.",
	},
];
export default function LogoCardList() {
	return (
		<section>
			<h1>Tech Stack</h1>
			<div className={styles.cardList}>
				<div className={styles.list}>
					{skills.map((skill) => {
						return (
							<LogoCard
								key={skill.id}
								icon={skill.icon}
								title={skill.name}
								description={skill.description}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
