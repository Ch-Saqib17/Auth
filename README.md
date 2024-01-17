# Next.js Authentication with Next-Auth, Middleware, and Protected Routes

![Next.js Logo](https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-js-logo.png)

## Overview

This project demonstrates how to integrate [Next-Auth](https://next-auth.js.org/) for authentication, leverage Next.js middleware for route protection, and create both public and protected routes. The application is built with Node.js version 18 and utilizes the [App Router](https://nextjs.org/docs/routing/introduction) feature of Next.js.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/JahanzaibTayyab/next-auth.git
   ```

2. Install dependencies:

   ```bash
   cd next-auth
   npm install
   ```

3. Create a `.env.local` file in the root of the project and configure your authentication providers. You can use the `.env.example` file as a template.

4. Start the development server:

   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:3000`.

## Authentication with Next-Auth

Next-Auth is integrated into the project to handle authentication. Update the `.env.local` file with your authentication provider credentials. Refer to the [Next-Auth documentation](https://next-auth.js.org/getting-started/example) for detailed configuration options.

## Middleware for Protected Routes

Middleware in Next.js is used to add functionality to the request-handling process. The `app/api/auth/[...nextauth]/route.ts` file serves as the authentication endpoint. Follow the [Next.js documentation](https://nextjs.org/docs/app/building-your-application/routing/middleware) for more information on creating middleware.

## Node.js Version

This project is configured to use Node.js version 18. Ensure that you have Node.js 18 installed to run the application successfully.

## Feedback and Contributions

Feedback, bug reports, and contributions are welcome. Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
