"use server";

import { revalidatePath } from "next/cache";

export const fetchGET = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`, {
    cache: "no-store",
  });

  const responseJson = await response.json();

  revalidatePath("/");

  return responseJson;
};

export const fetchPOST = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`, {
    method: "POST",
    headers: { "content-type": "applicaton/json" },
    body: JSON.stringify({ title, description }),
  });

  const responseJson = await response.json();

  return responseJson;
};

export const fetchPUT = async ({
  _id,
  title,
  description,
}: {
  _id: string;
  title: string;
  description: string;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${_id}`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title, description }),
    }
  );

  const responseJson = await response.json();

  return responseJson;
};

export const fetchDELETE = async ({ _id }: { _id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${_id}`,
    { method: "DELETE", headers: { "content-type": "application/json" } }
  );

  const responseJson = await response.json();

  return responseJson;
};
