// Auth config file 

import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "../../../../lib/prisma"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Instagram from "next-auth/providers/instagram"
import Credentials from "next-auth/providers/credentials"

const providers = [Credentials({
  credentials: {email: { label: "Email", type: "email" }, password: { label: "Password", type: "password" } },
  authorize(c) {
    if (c.password !== "password") return null
    return {
      id: "test",
      name: "Test User",
      email: "test@example.com",
    }
  },
}), GitHub, Google, Instagram]

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    } else {
      return { id: provider.id, name: provider.name }
    }
  })
  .filter((provider) => provider.id !== "credentials")
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: providers, 
})
