"use server";

import { sql } from "@vercel/postgres";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export const login = async (email: string): Promise<User | undefined> => {
  try {
    const { rows } = await sql<User>`SELECT * from users where email=${email}`;
    return rows[0];
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error);
    throw new Error("Failed to Fetch User");
  }
};
