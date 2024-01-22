import { User, login } from "@/server/login";

import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user: any = await login(credentials?.email as string);
        const passwordMatch = await bcrypt.compare(
          credentials?.password as string,
          user?.password as string
        );
        console.log("🚀 ~ authorize ~ passwordMatch:", passwordMatch);
        console.log("🚀 ~ authorize ~ user:", user);
        if (passwordMatch) {
          return user;
        }
          
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
};
