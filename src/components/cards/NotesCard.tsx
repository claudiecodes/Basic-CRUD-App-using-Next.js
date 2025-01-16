"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Note } from "@/libs/types";
import DeleteBtnComp from "../buttons/DeleteBtnComp";
import Link from "next/link";

export default function NotesCard({ notes }: { notes: Note[] }) {
  return (
    <>
      {notes.map((note) => (
        <Card key={note._id} className="w-[350px]">
          <CardHeader>
            <CardTitle>{note.title}</CardTitle>
            <CardDescription className="w-[350px] h-[100px]">
              {note.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <DeleteBtnComp _id={note._id} />
            <Button>
              <Link
                href={`/edit?id=${note._id}&title=${encodeURIComponent(
                  note.title
                )}&description=${encodeURIComponent(note.description)}`}
              >
                Edit
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
