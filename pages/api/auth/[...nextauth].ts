import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import GoogleProvider from "next-auth/providers/google"
import prisma from "@libs/prismadb" 

 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID as string,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        //  authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
        //  accessTokenUrl: 'https://www.googleapis.com/oauth2/v4/token',
        //  profileUrl: 'https://www.googleapis.com/oauth2/v3/userinfo',
        //  scope: ['profile', 'email'],
    })
  ],
})