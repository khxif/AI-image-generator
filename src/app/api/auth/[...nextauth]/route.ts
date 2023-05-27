import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const { GOOGLE_CLIENT_ID = '', GOOGLE_CLIENT_SECRET = '' } = process.env;
//console.log(GOOGLE_CLIENT_ID);
//console.log(GOOGLE_CLIENT_SECRET)

export const authOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET || GOOGLE_CLIENT_SECRET,
        }),
      ],
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }