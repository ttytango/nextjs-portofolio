// const dummyData = [{
//     id: "1",
//     importance: "High",
//     description: "Make sure that we have time for each other, to enjoy together, each day, for each other. We may not get the chance to enjoy that time together, which is OK. However, it is important that we communicate clearly with each other, and be sensitive to the other's mindset.",
//     when: "Each day",
//     ease: "Easy"
// }, {

// }]

export const projectData = [{
    id: "p1",
    title: "Some great project",
    description: "This was a great project to get involved in"
}, {
    id: "p2",
    title: "Another great project",
    description: "This another great project to get involved in"
}];

export default function getProjectById(id) {
    return projectData.find((project) => project.id === id);
}