// import { useEffect, usseState } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
// import useSWR from "swr";
import { getAllProjects } from "../../helpers/api-utils";
import styles from "./projectList.module.scss";
import Button from "../../components/ui/button";

//
// const projectData = [
// 	{
// 		id: "p1",
// 		title: "Some great project",
// 		description: "This was a great project to get involved in",
// 	},
// 	{
// 		id: "p2",
// 		title: "Another project",
// 		description: "This was another great project to get involved in",
// 	},
// ];

function ProjectsPage(props) {
	const projects = props.myProjects;
	// const [projects, setProjects] = useState(props.fetchedProjects);
	// const router = useRouter();
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
			<ul className={styles.projectList}>
				{projects.map((project) => {
					return (
						<li id={project.id} key={project.id}>
							<p>{project.title}</p>
							<Link href={`/projects/${encodeURIComponent(project.id)}`}>
								View Project
							</Link>
						</li>
					);
				})}
			</ul>
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
