"use client";

import { fetchDELETE } from "@/libs/actions";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useState } from "react";

export default function DeleteBtnComp({ _id }: { _id: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleDelete = async () => {
    setLoading(true);
    try {
      await fetchDELETE({ _id });
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div>
        <Button variant="outline" onClick={handleDelete} disabled={loading}>
          {loading ? "Deleting..." : "Delete"}
        </Button>
      </div>
    </>
  );
}
