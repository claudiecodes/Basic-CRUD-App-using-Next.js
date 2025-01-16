"use server";

import DeleteBtnComp from "@/components/DeleteBtnComp";
import { ThemeToggle } from "@/components/ThemeToggle";

import { fetchGET } from "@/libs/actions";
import { Note } from "@/libs/types";
import Link from "next/link";

export default async function Home() {
  const notes: Note[] = await fetchGET();

  return (
    <>
      <main className="p-10 justify-center">
        <div className="flex justify-end mr-10">
          <ThemeToggle />
        </div>
        <div className="flex justify-center font-bold p-10 text-3xl">
          <span>Notes App</span>
        </div>

        <div className="flex justify-center p-10">
          <div>
            {notes.map((note) => (
              <div key={note._id}>
                <div>Title:{note.title}</div>
                <div>Description: {note.description}</div>
                <DeleteBtnComp _id={note._id} />
                <div>
                  <Link
                    href={`/edit?id=${note._id}&title=${encodeURIComponent(
                      note.title
                    )}&description=${encodeURIComponent(note.description)}`}
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Link href="/add">Add new note</Link>
          </div>
        </div>
      </main>
    </>
  );
}
