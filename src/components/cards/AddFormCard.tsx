"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fetchPOST } from "@/libs/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function AddFormCard() {
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

  const handleCancel = async () => {
    router.push("/");
  };
  return (
    <Card className="w-[350px]">
      <CardHeader className="text-center p-10">
        <CardTitle>Create a new note</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Title</Label>
              <Input
                id="name"
                placeholder="Enter title here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Description</Label>
              <Input
                id="name"
                placeholder="Enter description here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleCancel} variant="outline">
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Add</Button>
      </CardFooter>
    </Card>
  );
}
