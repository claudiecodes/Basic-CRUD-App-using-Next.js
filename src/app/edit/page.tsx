import EditFormComp from "@/components/EditFormComp";
import { Suspense } from "react";

export default function EditPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <EditFormComp />
      </Suspense>
    </>
  );
}
