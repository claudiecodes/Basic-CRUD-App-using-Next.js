import { createNote, readNote } from "@/model";
import { NextResponse } from "next/server";

export const GET = async () => {
  const notes = await readNote();

  return NextResponse.json(notes);
};

export const POST = async (request: Request) => {
  const body = await request.json();
  const { title, description } = body;
  const note = await createNote({ title, description });

  return Response.json({
    status: 201,
    message: "Successfuly add new note",
    note: {
      _id: note.insertedId,
      title,
      description,
    },
  });
};
