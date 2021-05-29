// export default function formHandler (req, res) {
//     if (req.method === 'POST') {
//         res.status(201).json({message: "success"})
//     } else {
//         res.status(400).json({message: "failed"})
//     }
// }
// export default function sendFormHandler () {
    // event.preventDefault();
export async function sendForm (req, res) {
    const {name, email, description} = req.params.body;

    const result = await fetch('/api/contact-me', {
    message: {
        name,
        email,
        description,
    },
    headers: {
            'Content-Type': 'application/json',
    method: 'POST',
    }}).then((res) = res.json()).then((data) => {console.log(data)});
    // result.user => 'Ada Lovelace'
    console.log({data: result.message.description});

}
//     sendForm();
// }
