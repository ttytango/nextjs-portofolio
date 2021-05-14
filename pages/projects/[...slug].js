import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";


function ProjectsFilterPage(props){
    const [loadedProjects, setLoadedProjects] = useState();
    const router = useRouter();
    const projectsData = router.query.slug;

    const {data, error} = useSWR("https://nextjs-cours-13fb9-default-rtdb.firebaseio.com/events.json");



}

export default ProjectsFilterPage;
