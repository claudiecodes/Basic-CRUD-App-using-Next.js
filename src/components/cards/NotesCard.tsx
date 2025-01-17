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

export default function NotesCard({
  note,
  search,
}: {
  note: Note;
  search: string;
}) {
  const highlightedText = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, `<span class="bg-yellow-200">$1</span>`);
  };
  return (
    <>
      <Card key={note._id} className="w-[350px] flex flex-col h-full">
        <div className="flex-grow">
          <CardHeader>
            {/* <CardTitle>{note.title}</CardTitle>
            <CardDescription>{note.description}</CardDescription> */}

            <CardTitle
              dangerouslySetInnerHTML={{
                __html: highlightedText(note.title, search),
              }}
            />
            <CardDescription
              dangerouslySetInnerHTML={{
                __html: highlightedText(note.description, search),
              }}
            />
          </CardHeader>
        </div>
        <div>
          <CardFooter className="flex justify-between items-center mt-auto">
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
        </div>
      </Card>
    </>
  );
}
