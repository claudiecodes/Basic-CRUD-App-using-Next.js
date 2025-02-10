import { MongoClient } from "mongodb";

const uri = `${process.env.NEXT_MONGODB_URI}`;

export const client = new MongoClient(uri);
if (!client) {
  throw new Error("Mongo DB client connection failed");
}
export const database = client.db("Notes");

