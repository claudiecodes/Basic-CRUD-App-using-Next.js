"use client";

import { fetchDELETE } from "@/libs/actions";
import { useRouter } from "next/navigation";

export default function DeleteBtnComp({ _id }: { _id: string }) {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      await fetchDELETE({ _id });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
}
