"use client";

import { fetchDELETE } from "@/libs/actions";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

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
        <Button variant="outline" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </>
  );
}
