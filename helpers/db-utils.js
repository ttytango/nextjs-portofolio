import { MongoClient } from "mongodb";

export async function connectToDatabase() {
	const client = await MongoClient.connect(process.env.ATLAS_URI, {
		useUnifiedTopology: true,
	});
	return client;
}
