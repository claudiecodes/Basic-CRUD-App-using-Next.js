import { AddFormCard } from "@/components/cards/AddFormCard";
import { ThemeToggle } from "@/components/themes/ThemeToggle";
// import AddFormComp from "@/components/AddFormComp";

export default function AddPage() {
  return (
    <main className="p-10 justify-center">
      <div className="flex justify-end mr-10">
        <ThemeToggle />
      </div>
      <div className="flex justify-center p-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          New Note
        </h1>
      </div>
      <div className="flex justify-center mt-20">
        <AddFormCard />
      </div>
    </main>
  );
}
