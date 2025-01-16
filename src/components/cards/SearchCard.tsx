"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

export default function SearchCard() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSearch("");
    } catch (error) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };
  return (
    <>
      <div className="flex flex-cols w-[300px] gap-4 mb-10">
        <Input
          placeholder="Search by title..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Button onClick={handleSubmit} variant="secondary">
          Search
        </Button>
      </div>
    </>
  );
}
