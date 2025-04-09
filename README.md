# Feedback Collector

It is designed to collect and display user feedback efficiently.

## Project Structure

The project is organized as follows:


### Key Directories

- **`app/`**: Contains the main application files, including:
  - `globals.css`: Global styles for the application.
  - `layout.tsx`: Layout component for consistent page structure.
  - `page.tsx`: The main page of the application.
  - `api/`: API routes for server-side logic.

- **`components/`**: Includes reusable UI components such as:
  - `Feedback.tsx`: Displays a single feedback item.
  - `Feedbacks.tsx`: Lists all feedback items.
  - `Footer.tsx`: Footer section of the application.
  - `Form.tsx`: Feedback submission form.
  - `Header.tsx`: Header section of the application.

- **`public/`**: Contains static assets like images and icons.

- **`.next/`**: Auto-generated directory for build artifacts and cache.

## Tech Stack

This project uses the following technologies:

- **Frontend**: [React](https://reactjs.org) with [Next.js](https://nextjs.org) for server-side rendering and routing.
- **Styling**: [Tailwind CSS](https://tailwindcss.com) for utility-first CSS.
- **Backend**: [Postgres](https://www.postgresql.org) for database management.
- **HTTP Client**: [Axios](https://axios-http.com) for API requests.
- **TypeScript**: For type safety and better developer experience.
- **Linting**: [ESLint](https://eslint.org) for code quality.

## Environment Variables

The project uses a `.env.local` file to manage environment-specific configurations. You need to create this file in the root of your project and define the following variable:

- **`DATABASE_URL`**: The connection string for your PostgreSQL database.

Example `.env.local` file:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
```

Replace `username`, `password`, `localhost`, `5432`, and `database_name` with your actual database credentials.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com). Follow these steps:

1. Push your code to a Git repository (e.g., GitHub).
2. Go to [Vercel](https://vercel.com) and create a new project.
3. Import your repository and follow the setup instructions.
4. Vercel will automatically build and deploy your application.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - Learn React basics.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn how to style with Tailwind CSS.
- [Postgres Documentation](https://www.postgresql.org/docs/) - Learn about PostgreSQL.

Your feedback and contributions are welcome!
