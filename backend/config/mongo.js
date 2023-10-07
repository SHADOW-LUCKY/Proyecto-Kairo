import {MongoClient} from 'mongodb'

export default async function connect(){
    try {
        const client = await MongoClient.connect(process.env.MANGOS_URL);
        await client.connect();
        const db = client.db('kairo');
        return db
    } catch (error) {
        console.log(error);
    }
}