// import { useEffect, usseState } from "react";
// import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
// import useSWR from "swr";
import { getAllProjects } from "../../helpers/api-utils";
import styles from "./projectList.module.scss";
// import SearchByKeyword from "../../components/projects/searchbox";
// import Button from "../../components/ui/button";
// import buttonStyles from "../../components/ui/button.module.scss";

function ProjectItem(props) {
	return (
		<ul className={styles.projectList}>
			{props.projects.map(props.callbackfn)}
		</ul>
	);
}

function ProjectsPage(props) {
	const projects = props.myProjects;
	// SWITCH TO useRouter IF ADDING IN A FILTER FOR KEYWORDS and useSWR for client-side data-fetching
	// const [projects, setProjects] = useState(props.fetchedProjects);
	// const router = useRouter();

	// function keywordHandler(keyword) {
	// 	const fullPath = `/projects/${keyword}`;
	// 	router.push(fullPath);
	// }
	// const projectId = router.query.id;

	// const { data, error } = useSWR(
	// 	"https://portfolio-c7693-default-rtdb.europe-west1.firebasedatabase.app/projects.json"
	// );

	// useEffect(() => {
	// 	if (data) {
	// 		const projectsData = [];

	// 		for (const key in data) {
	// 			projectsData.push({
	// 				id: key,
	// 				title: data[key].title,
	// 				description: data[key].description,
	// 				tags: data[key].tags,
	// 				isLive: data[key].isLive,
	// 				sourceCode: data[key].sourceCode,
	// 				URL: data[key].URL,
	// 			});
	// 		}
	// 		setProjects(fetchedProjects);
	// 	}
	// }, [data]);

	//
	// function getAllProjects() {
	// 	return projectData;
	// }
	// const projects = getAllProjects(projectData);

	// const id = router.query.id;
	// const { id, title, description } = props;

	// if (error) {
	// 	return <p>Failed to load.</p>;
	// }

	// if (!data && !projects) {
	// 	return <p>Loading...</p>;
	// }

	return (
		<section className={styles.listSection}>
			<h1>Projects</h1>
			{/* <SearchByKeyword onSearch={keywordHandler} /> */}
			<ProjectItem
				projects={projects}
				callbackfn={(project) => {
					return (
						<li
							id={project.id}
							key={project.id}
							className={styles.projectListItem}
						>
							<div className={styles.projectTitle}>
								<h2>{project.title}</h2>
							</div>
							<span className={styles.toolsContainer}>
								<div>
									<h4>Principle Tools Used:</h4>
									<ul>
										{project.tags.map((data, key, tag) => {
											return (
												<li id={key} key={tag.id}>
													{tag[key]}
												</li>
											);
										})}
									</ul>
								</div>
								<div className={styles.imageContainer}>
									<Image
										src={"/" + project.image}
										alt={project.title}
										width={820}
										height={450}
									/>
								</div>
							</span>

							<Link href={`/projects/${encodeURIComponent(project.id)}`}>
								<button className={styles.button}>View Project</button>
							</Link>
						</li>
					);
				}}
			/>
		</section>
	);
}

export async function getStaticProps() {
	const fetchedProjects = await getAllProjects();

	return {
		props: {
			myProjects: fetchedProjects,
		},
		revalidate: 1800,
	};
}

export default ProjectsPage;
