export async function getAllProjects() {
    const response = await fetch('https://portfolio-tjs-2-default-rtdb.europe-west1.firebasedatabase.app/projects.json');
    const data = await response.json();

    const projects = [];

    for (const key in data) {
        projects.push({
            id: key,
            ...data[key]
        });
    }
    return projects;
}

export async function getProjectById(id) {
    const allProjects = await getAllProjects();
    return allProjects.find((project) => project.id === id);
}
