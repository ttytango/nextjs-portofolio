// import { useEffect, usseState } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import { useRouter } from "next/router";
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
	// const [projects, setProjects] = useState(props.fetchedProjects);
	const router = useRouter();

	function keywordHandler(keyword) {
		const fullPath = `/projects/${keyword}`;
		router.push(fullPath);
	}
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
			<h2>Projects</h2>
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
							<p>{project.title}</p>
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
