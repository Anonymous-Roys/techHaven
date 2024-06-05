import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
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
    CredentialsProvider({
        name: 'credentials',
        credentials:{
            email:{
                label: 'email',
                type: 'text',
                // placeholder: 'Enter your email',
            },
            password:{
                label: 'password',
                type: 'password',
                // placeholder: 'Enter your password',
            }
        },
        async authorize(credentials) {
            if(!credentials?.email || !credentials.password){
                throw new Error('Invalid email or password')
            }
            const user = await prisma.user.findUnique({
                where: {
                    email: credentials.email,
                },
            })
            if(!user || ! user?.hashedPassword){
                throw new Error('Invalid password')
            }
            if (user) {
                if (user.hashedPassword ===  credentials.password) {
                    return user
                }
            }
            return null
        }
    })
  ],
})