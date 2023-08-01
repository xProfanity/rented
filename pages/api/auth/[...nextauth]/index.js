import NextAuth from "next-auth/next";
import { authOptions } from "../authOptions";

export default NextAuth(authOptions)