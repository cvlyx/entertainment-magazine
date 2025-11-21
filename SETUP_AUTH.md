# Authentication Setup Guide

## Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
# MongoDB Connection String
# For local MongoDB: mongodb://localhost:27017/entertainment-magazine
# For MongoDB Atlas: mongodb+srv://<username>:<password>@<cluster>.mongodb.net/entertainment-magazine
MONGODB_URI=mongodb://localhost:27017/entertainment-magazine

# NextAuth Configuration
NEXTAUTH_SECRET=your-super-secret-key-here-min-32-characters
NEXTAUTH_URL=http://localhost:3000

# Optional: Google OAuth (if you want to use Google Sign-In)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Generating NEXTAUTH_SECRET

Run this command in your terminal to generate a secure secret:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Or use this online tool: https://generate-secret.vercel.app/32

## MongoDB Setup

### Option 1: Local MongoDB
1. Install MongoDB on your computer
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/entertainment-magazine`

### Option 2: MongoDB Atlas (Cloud - Recommended)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster
4. Click "Connect" and choose "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database user password
7. Replace `<cluster>` with your cluster name

## Available Routes

- **Home Page**: http://localhost:3000
- **Sign Up**: http://localhost:3000/register
- **Sign In**: http://localhost:3000/signin
- **Dashboard**: http://localhost:3000/dashboard (protected)

## Testing the Authentication

1. Start your development server: `npm run dev`
2. Navigate to http://localhost:3000
3. Click "Sign Up" in the header
4. Create a new account
5. Sign in with your credentials
6. Access your dashboard

## Troubleshooting

### 404 Errors
- Make sure all files are in the correct directories
- Restart your development server after making changes
- Clear your browser cache

### Authentication Not Working
- Verify your MONGODB_URI is correct
- Check that NEXTAUTH_SECRET is set (minimum 32 characters)
- Make sure MongoDB is running
- Check browser console for errors

### Session Issues
- Clear your browser cookies
- Try incognito/private browsing mode
- Verify SessionProvider is wrapping your app in layout.tsx
