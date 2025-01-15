import { createNote, readNote } from "@/model";

export const GET = async () => {
  const notes = await readNote();

  return Response.json({
    status: 200,
    message: "Successfully read notes",
    notes,
  });
};

export const POST = async (request: Request) => {
  const body = await request.json();
  const { title, description } = body;
  const note = await createNote({ title, description });

  return Response.json({
    status: 201,
    message: "Successfuly add new note",
    note,
  });
};
