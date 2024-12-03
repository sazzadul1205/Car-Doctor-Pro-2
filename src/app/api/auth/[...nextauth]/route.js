import bcrypt from "bcryptjs";
import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  secret: process.env.JWT_SECRET,
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

        // Check if the user is registered with an OAuth provider
        if (!currentUser.password) {
          throw new Error(
            "This account is registered using Google or GitHub. Please log in using the appropriate method."
          );
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
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google" || account.provider === "github") {
        const { name, email, image } = user;
        try {
          const db = await connectDB();
          const userCollection = db.collection("Users");
          const userExist = await userCollection.findOne({ email });
          if (!userExist) {
            const res = await userCollection.insertOne(user);
            // console.log(res);

            return user;
          } else {
            return user;
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        return user;
      }
    },
  },
  pages: {
    // Define the custom sign-in page
    signIn: "/Login", // Redirect users to the custom login page for sign-in
  },
});

// Export the handler for GET and POST requests
export { handler as GET, handler as POST };
