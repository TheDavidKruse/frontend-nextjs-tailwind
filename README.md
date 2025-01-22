This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Fullstack Take Home Task
Full-Stack Take-Home Test: Todo List App

Next.js,
Express.js,
Prisma,
and MySQL. Entirely with Typescript, and then Tailwind CSS for frontend. Please do not spend more than 5-6 hours on this task.
Build a Todo List App where users can:
Add tasks.
Edit tasks.
Mark tasks as Completed/Not Completed.
Delete tasks.
Features

1. Home View
   Displays a list of tasks with:
   Title.
   Checkbox or toggle to mark as Completed/Not Completed.
   Delete button.
   Includes:
   Create Task button to navigate to a form for adding tasks.
   A summary of tasks: "Tasks: X" and "Completed: Y of X".
   Clicking on a task card navigates to the Edit Task Page.
2. Create/Edit Task Page
   A form with fields:
   Title (required).
   Color (selectable options, e.g., red, blue, green).
   Behavior:
   Create Task: Saves a new task and redirects to the Home View.
   Edit Task: Updates an existing task and redirects to the Home View.
   Navigating back without saving discards changes.
3. Additional Features
   Toggle a task’s completion status directly on the Home View.
   Delete tasks with a confirmation prompt.
   Technical Requirements
   Front-End: Use Next.js (App Router).
   Follow the provided Figma Design.
   Ensure responsiveness and clean UI.
   Use reusable components (e.g., Task Cards, Forms).
   Back-End: Use Express.js.
   REST API Endpoints:
   GET /tasks
   POST /tasks
   PUT /tasks/:id
   DELETE /tasks/:id
   Database: Use Prisma with MySQL.
   Tasks should include: id, title, color, completed status, and timestamps.
   Best Practices:
   Keep code clean and modular.
   Implement basic validation and error handling.
   Submission Guidelines
   Provide two GitHub repositories:
   Front-End: Next.js app.
   Back-End: Express.js API.
   Include:
   Clear setup instructions for both repos.
   Steps for database initialization using Prisma.
   Reminder: Limit your time to 5-6 hours. Focus on core functionality and clean, maintainable code.
   Good luck, and let us know if you have questions!
