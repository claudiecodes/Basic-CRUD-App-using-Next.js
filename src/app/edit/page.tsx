"use client";
import { EditFormCard } from "@/components/cards/EditFormCard";
import { ThemeToggle } from "@/components/themes/ThemeToggle";
import { Suspense } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function EditPage() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center min-h-screen items-center">
            {" "}
            <DotLottieReact
              src="https://lottie.host/7381f62c-aebd-471b-8a59-d7eff043b943/PmRcXKkT3L.lottie"
              loop
              autoplay
            />
          </div>
        }
      >
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
