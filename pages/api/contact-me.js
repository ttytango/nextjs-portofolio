const handler = async (req, res) => {
    let newMessage = { };
    if (req.method === 'POST') {
        const {name, email, description} = req.body.message;
        newMessage = {
            id: new Date().toISOString(),
            name: name,
            email: email,
            description: description,
        }
        res.status(201).json({message: `success ${newMessage.name}, ID: ${newMessage.id}`});
    } else {
        res.status(400).json({message: "failed"})
    }
}
export default handler;
//         headers: {
//         'Content-Type': 'application/json'},
// method: 'POST',
// }}).then((res) = res.json()).then((data) => {console.log(data)});
