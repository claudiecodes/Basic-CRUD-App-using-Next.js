import { deleteNote, updateNote } from "@/model";

export const PUT = async (
  request: Request,
  { params }: { params: { _id: string } }
) => {
  const body = await request.json();
  const { title, description } = body;
  const { _id } = params;
  const note = await updateNote({ _id, title, description });

  return Response.json({
    status: 200,
    message: "Successfully update note",
    note,
  });
};

export const DELETE = async (
  _request: Request,
  { params }: { params: { _id: string } }
) => {
  const { _id } = params;
  const note = await deleteNote({ _id });

  return Response.json({
    status: 200,
    message: "Successfully delete note",
    note,
  });
};
