import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;
      createdAt?: Date;
    };
  }

  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role?: string;
  }
}

declare module 'mongoose' {
  interface ConnectOptions {
    bufferCommands?: boolean;
  }
}

declare global {
  var mongoose: {
    conn: any;
    promise: any;
  };
}
