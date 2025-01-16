import { database } from "@/config";
import { ObjectId } from "mongodb";

export const readNote = async (search: string = "") => {
  const query = search ? { title: { $regex: search, $options: "i" } } : {};

  const notes = await database
    .collection("notes")
    .find(query)
    .sort({ _id: -1 })
    .toArray();

  console.log(query, "<< di model");
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
    .collection("notes")
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
    .collection("notes")
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
    .collection("notes")
    .findOneAndDelete({ _id: newId });

  return note;
};
