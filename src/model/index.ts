import { database } from "@/config";
import { ObjectId } from "mongodb";

export const readNote = async () => {
  const notes = await database.collection("Notes").find().toArray();

  return notes;
};

export const createNote = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const note = await database
    .collection("Notes")
    .insertOne({ title, description });
  return note;
};

export const updateNote = async ({
  _id,
  title,
  description,
}: {
  _id: string;
  title: string;
  description: string;
}) => {
  const newId = new ObjectId(_id);
  const note = await database
    .collection("Notes")
    .findOneAndUpdate(
      { _id: newId },
      { $set: { title, description } },
      { returnDocument: "after" }
    );

  return note;
};

export const deleteNote = async ({ _id }: { _id: string }) => {
  const newId = new ObjectId(_id);
  const note = await database
    .collection("Notes")
    .findOneAndDelete({ _id: newId });

  return note;
};
