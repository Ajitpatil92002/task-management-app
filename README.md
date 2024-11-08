# Task Management Application

## Overview

This is a modern, responsive task management application built with Next.js, React, and shadcn/ui, powered by Bun as the JavaScript runtime. It allows users to efficiently manage tasks, providing features like task creation, editing, deletion, and status updates. The application offers a user-friendly interface with keyboard shortcuts for quick actions.

## Features

-   Create, read, update, and delete tasks
-   Organize tasks by status (Open, In Progress, Closed)
-   Sort tasks by due date, priority, or assignee
-   Search functionality to quickly find tasks
-   Responsive design for various screen sizes
-   Keyboard shortcuts for efficient task management
-   Local storage persistence for tasks and comments

## Technologies Used

-   Bun 1.0+
-   Next.js 13+ (App Router)
-   React 18+
-   TypeScript
-   shadcn/ui components
-   Tailwind CSS

## Getting Started

### Prerequisites

-   Bun 1.0 or later

### Installation

1. Clone the repository:

    ```
    git clone https://github.com/Ajitpatil92002/task-management-app
    cd task-management-app
    ```

2. Install dependencies:

    ```
    bun install
    ```

3. Run the development server:

    ```
    bun run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

-   **Creating a Task**: Click the "New Task" button to create a new task.
-   **Editing a Task**: Click on a task in the table to open the edit modal.
-   **Changing Task Status**:
    -   In the task edit modal, use the dropdown to change the status.
    -   Alternatively, use keyboard shortcuts:
        -   Press '1' for Open
        -   Press '2' for In Progress
        -   Press '3' for Closed
-   **Deleting a Task**: In the task edit modal, click the "Delete" button.
-   **Sorting Tasks**: Use the sort dropdown and direction button above the task table.
-   **Searching Tasks**: Use the search bar to filter tasks by name, assignee, or labels.

## Project Structure

-   `app/`: Contains the main application code
    -   `components/`: Reusable React components
    -   `page.tsx`: Main page component
-   `public/`: Static assets

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Bun-specific Notes

This project uses Bun as the JavaScript runtime. Bun is designed to be a faster, more efficient alternative to Node.js. Here are some Bun-specific considerations:

-   Bun has built-in support for TypeScript, so no additional compilation step is needed.
-   Bun's package manager is used instead of npm or yarn. Use `bun install` to add new dependencies.
-   The `bun run` command is used to execute scripts defined in your package.json.

For more information on Bun, visit the [official Bun documentation](https://bun.sh/docs).
