import { MongoClient } from "mongodb";
import { MONGODB } from "../config/config.js";

export default async function connect() {
  try {
    const client = await MongoClient.connect(MONGODB.URL);
    const db = client.db();
    return db;
  } catch (error) {
    throw new Error({ message: "Error al conectar a MongoDB:", error });
  }
}
