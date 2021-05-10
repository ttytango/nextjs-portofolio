import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./projectList.module.scss";
import Button from "../../components/ui/button";

const projectData = [
	{
		id: "p1",
		title: "Some great project",
		description: "This was a great project to get involved in",
	},
	{
		id: "p2",
		title: "Another project",
		description: "This was another great project to get involved in",
	},
];

export default function ProjectsPage() {
	const router = useRouter();
	// const projectId = router.query.id;

	function getAllProjects() {
		return projectData;
	}
	const projects = getAllProjects(projectData);

	// const id = router.query.id;
	// const { id, title, description } = props;
	return (
		<section className={styles.listSection}>
			<h2>Projects</h2>
			<ul className={styles.projectList}>
				{projects.map((project) => {
					return (
						<li key={project.id} id={project.id}>
							<Link href={`/projects/${project.id}`} projects={projects}>
								<Button>
									<a href={`/projects/${project.id}`}>{project.title}</a>
								</Button>
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
