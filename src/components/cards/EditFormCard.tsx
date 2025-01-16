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
import { fetchPUT } from "@/libs/actions";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function EditFormCard() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const _id = searchParams.get("id") || "";
  const existingTitle = searchParams.get("title") || "";
  const existingDescription = searchParams.get("description") || "";

  const [title, setTitle] = useState(existingTitle);
  const [description, setDescription] = useState(existingDescription);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetchPUT({ _id, title, description });

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
        <CardTitle>Update note</CardTitle>
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
        <Button onClick={handleSubmit}>Update</Button>
      </CardFooter>
    </Card>
  );
}
