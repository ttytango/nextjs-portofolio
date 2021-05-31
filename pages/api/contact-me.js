import { MongoClient } from 'mongodb';

const handler = async(req, res) => {
    let newMessage = {};

    const { name, email, description } = req.body.message;


    if (req.method === 'POST') {
        newMessage = {
            // id: new Date().toISOString(),
            name: name,
            email: email,
            description: description
        }
        const client = await MongoClient.connect(process.env.ATLAS_URI, { useUnifiedTopology: true });

        const db = client.db();
        await db.collection('mail').insertOne({ mail: newMessage });
        // const userMessage = JSON.stringify(newMessage);
        client.close();
        res.status(201).json({ message: "success" });

    } else {
        client.close();
        res.status(400).json({ message: "failed" });
    }

}
export default handler;
//         headers: {
//         'Content-Type': 'application/json'},
// method: 'POST',
// }}).then((res) = res.json()).then((data) => {console.log(data)});