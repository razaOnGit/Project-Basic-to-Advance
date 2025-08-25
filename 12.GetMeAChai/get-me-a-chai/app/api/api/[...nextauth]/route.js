// pages/api/auth/[...nextauth].js (for Pages Router)
// OR app/api/auth/[...nextauth]/route.js (for App Router)

import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client
      session.accessToken = token.accessToken
      return session
    },
  },
  pages: {
    error: '/auth/error', // Custom error page (optional)
  }
}

// For Pages Router
export default NextAuth(authOptions)

// For App Router, export as GET and POST
// export { authOptions as default }
// export const GET = NextAuth(authOptions)
// export const POST = NextAuth(authOptions)