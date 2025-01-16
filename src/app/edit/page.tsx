import { EditFormCard } from "@/components/EditFormCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Suspense } from "react";

export default function EditPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <main className="p-10 justify-center">
          <div className="flex justify-end mr-10">
            <ThemeToggle />
          </div>
          <div className="flex justify-center p-10">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Update Note
            </h1>
          </div>
          <div className="flex justify-center mt-20">
            <EditFormCard />
          </div>
        </main>
      </Suspense>
    </>
  );
}
