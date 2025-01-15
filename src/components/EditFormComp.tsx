"use client";

import { fetchPUT } from "@/libs/actions";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function EditFormComp() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const _id = searchParams.get("id") || "";
  const existingTitle = searchParams.get("title") || "";
  const existingDesc = searchParams.get("description") || "";
  const [title, setTitle] = useState(existingTitle);
  const [description, setDescription] = useState(existingDesc);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetchPUT({ _id, title, description });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleUpdate}>
        <div>
          Title:
          <input
            type="text"
            className="text-black"
            placeholder="Enter title...."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          Description:
          <input
            type="text"
            className="text-black"
            placeholder="Enter description...."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </>
  );
}
