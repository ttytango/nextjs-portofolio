function emailValidate(string) {
    const email = string.trim();
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
}

const handler = async (req, res) => {
    let newMessage = { };
    const {name, email, description} = req.body.message;

    if (req.method === 'POST' && emailValidate(email)) {
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
