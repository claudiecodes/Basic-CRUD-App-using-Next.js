"use server";

import NotesCard from "@/components/cards/NotesCard";
import { ThemeToggle } from "@/components/themes/ThemeToggle";

import { fetchGET } from "@/libs/actions";
import { Note } from "@/libs/types";

export default async function Home() {
  const notes: Note[] = await fetchGET();

  return (
    <>
      <main className="p-10 justify-center">
        <div className="flex justify-end mr-10">
          <ThemeToggle />
        </div>
        <div className="flex justify-center p-10">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Notes App
          </h1>
        </div>
        <div className="grid gap-6 mt-20 px-10 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {notes.map((note) => (
            <NotesCard key={note._id} notes={notes} />
          ))}
        </div>
      </main>
    </>
  );
}
