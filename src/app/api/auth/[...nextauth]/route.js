import bcrypt from "bcryptjs";
import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
// import FacebookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
  session: {
    // Use JSON Web Tokens (JWT) for managing sessions
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // Session expiration time (30 days)
  },
  providers: [
    // Set up the Credentials provider for email/password authentication
    CredentialsProvider({
      credentials: {
        // Define the expected credentials structure
        email: {}, // Input field for email
        password: {}, // Input field for password
      },
      async authorize(credentials) {
        // Extract email and password from provided credentials
        const { email, password } = credentials;

        // Validate that both fields are provided
        if (!email || !password) {
          return null; // Return null if either field is missing
        }

        // Connect to the database
        const db = await connectDB();

        // Find the user in the database by email
        const currentUser = await db.collection("Users").findOne({ email });
        if (!currentUser) {
          // Return null if the user is not found
          return null;
        }

        // Compare the provided password with the hashed password in the database
        const passwordMatched = bcrypt.compareSync(
          password,
          currentUser.password
        );
        if (!passwordMatched) {
          // Return null if the passwords do not match
          return null;
        }

        // If the user is authenticated successfully, return their details
        return currentUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_JS_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_JS_GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.NEXT_JS_GITHUB_ID,
      clientSecret: process.env.NEXT_JS_GITHUB_SECRET,
    }),

    // FacebookProvider({
    //   clientId: process.env.NEXT_JS_FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.NEXT_JS_FACEBOOK_CLIENT_SECRET,
    // }),
  ],
  callbacks: {},
  pages: {
    // Define the custom sign-in page
    signIn: "/Login", // Redirect users to the custom login page for sign-in
  },
});

// Export the handler for GET and POST requests
export { handler as GET, handler as POST };
