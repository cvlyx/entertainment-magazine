import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { api } from './api';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please enter your email and password');
        }

        try {
          const res = await api.auth.login({
            email: credentials.email,
            password: credentials.password,
          });

          if (res.user && res.token) {
            return {
              id: res.user.id,
              name: res.user.username,
              email: res.user.email,
              role: res.user.role,
              accessToken: res.token,
            };
          }
          return null;
        } catch (error) {
          throw new Error('Invalid email or password');
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role as string;
        session.user.id = token.id as string;
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/signin',
    error: '/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
