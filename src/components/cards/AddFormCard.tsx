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
import { Textarea } from "../ui/textarea";

export function AddFormCard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const textLimit = 250;

  const handleLimit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= textLimit) {
      setDescription(e.target.value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetchPOST({ title, description });

      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      router.push("/");
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
                id="input"
                placeholder="Enter title here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Description</Label>
              <Textarea
                id="input"
                placeholder="Enter description here"
                value={description}
                onChange={handleLimit}
                disabled={loading}
                style={{ width: "100%", height: "140px" }}
              />
              <div
                style={{ fontSize: "14px", color: "gray", marginTop: "5px" }}
              >
                {textLimit - description.length} characters left
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleCancel} variant="outline">
          Cancel
        </Button>
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Adding..." : "Add"}
        </Button>
      </CardFooter>
    </Card>
  );
}
