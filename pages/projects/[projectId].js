import { useRouter } from "next/router";
import getProjectById from "../../dummy-data";
import styles from "./project.module.scss";
import Card from "../../components/ui/card";

export default function ProjectDetailPage() {
	const router = useRouter();

	const projectId = router.query.projectId;

	const project = getProjectById(projectId);

	return (
		<Card key={project.id}>
			<div className={styles.project}>
				<h2>{project.title}</h2>
				<p>{project.description}</p>
			</div>
		</Card>
	);
}
