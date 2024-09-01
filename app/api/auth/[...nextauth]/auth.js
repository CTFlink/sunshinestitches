//Auth config file 
import { PrismaAdapter } from "@auth/prisma-adapter"
import { Prisma } from "@prisma/client"
import { prisma } from "../../../../lib/prisma"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Instagram from "next-auth/providers/instagram"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub, Google, Instagram], 
})
