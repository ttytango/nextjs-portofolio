// import path from "path";
// import fs from "fs/promises";
// import Image from "next/image";
// import { useRouter } from "next/router";
import { Fragment } from "react";
import Link from "next/link";
import { getProjectById, getAllProjects } from "../../helpers/api-utils";
import styles from "./project.module.scss";
import Card from "../../components/ui/card";

function ProjectDetailPage(props) {
	// const { projects } = props;
	// const router = useRouter();
	// //
	// const projectId = router.query.projectId;
	//
	const project = props.selectedProject;

	if (!project) {
		return <p>Loading...</p>;
	}

	return (
		<Fragment>
			<Card id={project.id} key={project.id}>
				<div className={styles.project}>
					<h2>{project.title}</h2>
					<p>{project.description}</p>
					<div className={styles.buttonGroup}>
						{project.isLive ? (
							<a
								target="_blank"
								href={`${project.url}`}
								rel="noopener noreferrer"
								className={styles.linkButton}
							>
								View Live Project
							</a>
						) : null}
						{project.sourceCode ? (
							<a
								target="_blank"
								href={`${project.sourceCode}`}
								rel="noopener noreferrer"
								className={styles.linkButton}
							>
								View Code on Github
							</a>
						) : null}
						<Link href={`/projects`}>
							<a className={styles.backButton}>Back to Projects</a>
						</Link>
					</div>
				</div>
			</Card>
		</Fragment>
	);
}

// async function getData()  {}
//
// export async function getStaticProps(context) {
// 	const { params } = context;
// }
// export async function getStaticPaths() {}

export async function getStaticProps(context) {
	const projectId = context.params.projectId;

	const project = await getProjectById(projectId);
	// const { params, req, res } = context;

	return {
		props: {
			selectedProject: project,
		},
		revalidate: 30,
	};
}

export async function getStaticPaths() {
	const projects = await getAllProjects();

	const paths = projects.map((project) => ({
		params: { projectId: project.id },
	}));

	return {
		paths: paths,
		fallback: false,
	};
}

export default ProjectDetailPage;
