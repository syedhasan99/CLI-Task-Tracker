# Task Tracker CLI
A simple **Command-Line Interface (CLI)** application built with **Node.js** and **MongoDB** to manage tasks efficiently.

You can add, update, delete, and list tasks directly from your terminal.

## Features
- Add new tasks
- Update task status (e.g., `pending`, `in-progress`, `done`)
- Delete tasks
- View all tasks or filter by status
- Persistent storage with MongoDB

## Installation
**1.** Clone the repository:
  ```bash
  git clone https://github.com/yourusername/task-tracker-cli.git
  cd task-tracker-cli
  ```
**2.** Install dependencies:
```bash
npm install
```

**3.** Set up your .env file:
```env
MONGO_URI=your_mongodb_connection_string
```
**4.** Run the application:
```bash
node task-cli.js
```

## Usage
Example commands:
```bash
# Add a new task
node task-cli.js add "Finish report"

# List all tasks
node task-cli.js list

# List tasks by status
node task-cli.js list done

# Update a task status
node task-cli.js update 64b1c3f5... in-progress

# Delete a task
node task-cli.js delete 64b1c3f5...

```
## Project Idea Reference
This project is based on the idea from roadmap.sh:

🔗 [https://roadmap.sh/projects/task-tracker](https://roadmap.sh/projects/task-tracker)
