import NextAuth from "next-auth/next";
import { authOptions } from "../authOptions";

const handler = NextAuth(authOptions)

export { handle as GET, handler as POST };
