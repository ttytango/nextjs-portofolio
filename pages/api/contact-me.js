import { connectToDatabase } from "../../helpers/db-utils";

const handler = async(req, res) => {
    let newMessage = {};

    const { name, email, description, timestamp } = req.body.message;

    if (req.method !== 'POST') {
        return;
    }

    if (req.method === 'POST') {

        newMessage = {
            name: name,
            email: email,
            description: description,
            timestamp: timestamp,
        }

        let client;
        try {
            client = await connectToDatabase();
        } catch(error) {
            res.status(500).json({message: 'Failed to connect to the database.' })
            return;
        }

        // If code reaches here, it has made a successful connection to mongodb

        const db = client.db();
        try {
            const messageCollection = await db.collection('mail').insertOne({ mail: newMessage });
            client.close();
            res.status(201).json({ message: 'Successfully added message to database.' });
        } catch (error) {
            client.close()
            res.status(500).json({ message: 'Database connected successfully but inserting message failed' });
            return;
        }
        // const userMessage = JSON.stringify(newMessage);


    }


}
export default handler;
