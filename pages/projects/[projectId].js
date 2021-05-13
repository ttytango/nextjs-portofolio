// import path from "path";
// import fs from "fs/promises";

// import { useRouter } from "next/router";
import { Fragment } from "react";
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

	// console.log("Server Side Code");

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
