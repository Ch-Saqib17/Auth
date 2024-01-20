"use server";

import * as z from "zod";

import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { sql } from "@vercel/postgres";

const getUserByEmail = async (email: string) => {
  try {
    const { rows } = await sql`SELECT * from users where email=${email}`;
    return rows[0];
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error);
    throw new Error("Failed to Fetch User");
  }
};

const addUser = async (user: z.infer<typeof RegisterSchema>) => {
  try {
    const { rows } =
      await sql`INSERT INTO users (name,email,password) VALUES (${user.name}, ${user.email}, ${user.password});`;
    return rows[0];
  } catch (error) {
    console.log("🚀 ~ addUser ~ error:", error);
    throw new Error("Failed to Add User");
  }
};

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }
  addUser({ email, name, password: hashedPassword });

  return { success: "User Created" };
};
