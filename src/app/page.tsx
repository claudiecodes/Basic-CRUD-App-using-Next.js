"use client";

import NotesCard from "@/components/cards/NotesCard";
import { ThemeToggle } from "@/components/themes/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetchGET } from "@/libs/actions";
import { Note } from "@/libs/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [notes, setNotes] = useState<Note[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchNotes = async (query = "") => {
    setLoading(true);
    try {
      const fetchedNotes: Note[] = await fetchGET(query);
      setNotes(fetchedNotes);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const maxLimit = 8;
  const totalPages = notes.length ? Math.ceil(notes.length / maxLimit) : 1;
  const paginatedNotes = notes.slice(
    (currentPage - 1) * maxLimit,
    currentPage * maxLimit
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleSearch = () => {
    setSearch("");
    setCurrentPage(1);
    fetchNotes(search);
  };
  return (
    <>
      <main className="p-10 min-w-[518px] h-screen">
        <div className="flex justify-end mr-10">
          <ThemeToggle />
        </div>
        <div className="flex justify-center p-5">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Notes App
          </h1>
        </div>

        <div className="flex justify-end mr-12">
          <div className="flex flex-cols w-[300px] gap-4 mb-10">
            <Input
              placeholder="Search by title..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <Button onClick={handleSearch} variant="secondary">
              Search
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/add">
            <Button>Add Note</Button>
          </Link>
        </div>
        {loading ? (
          <p className="text-center mt-10">Please wait...</p>
        ) : (
          <>
            <div className="grid gap-6 mt-20 px-10 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {paginatedNotes.map((note) => (
                <NotesCard key={note._id} note={note} />
              ))}
            </div>

            <div className="container mx-auto px-4 mb-12 flex justify-center items-center gap-4 mt-10">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    currentPage === index + 1
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-400 dark:bg-gray-700 dark:text-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}
