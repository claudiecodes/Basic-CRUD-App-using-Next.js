"use client";
import { fetchPOST } from "@/libs/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddFormComp() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetchPOST({ title, description });

      setTitle("");
      setDescription("");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}
