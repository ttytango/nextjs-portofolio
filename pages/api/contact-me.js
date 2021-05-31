const handler = async (req, res) => {
    let newMessage = { };

    const {name, email, description} = req.body.message;

    if (req.method === 'POST') {
        newMessage = {
            id: new Date().toISOString(),
            name: name,
            email: email,
            description: description,
        }
        const userMessage = JSON.stringify(newMessage);
        res.status(201).send(userMessage);
    } else {
        res.status(400).json({message: "failed"});
    }
}
export default handler;
//         headers: {
//         'Content-Type': 'application/json'},
// method: 'POST',
// }}).then((res) = res.json()).then((data) => {console.log(data)});
