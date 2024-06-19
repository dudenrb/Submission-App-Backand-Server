# Submission-App-Backand-Server

## Backend Server Description

### Overview
This is an Express server written in TypeScript that handles form submissions. It uses a JSON file (`db.json`) to store submissions and provides endpoints to interact with the data.

### Features
- **/ping**: Health check endpoint that always returns true.
- **/submit**: Endpoint to submit a form with details like Name, Email, Phone, GitHub link, and stopwatch time.
- **/read**: Endpoint to read a specific submission based on its index.
- **/readAll**: Endpoint to read all submissions.

### Requirements
- Node.js
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Usage
1. Run the server:
   ```bash
   npx ts-node-dev server.ts
   ```

2. The server will be running on `http://localhost:5000`.

### API Endpoints
- **GET /ping**: Returns `{ success: true }`.
- **POST /submit**: Submits form data.
  - **Request Body**: `{ "name": "John Doe", "email": "john@example.com", "phone": "123-456-7890", "github_link": "https://github.com/johndoe", "stopwatch_time": "00:05:23.456" }`
- **GET /read?index=0**: Reads the submission at the specified index.
- **GET /readAll**: Reads all submissions.

### Code Overview
#### server.ts
Main server file that defines the API endpoints and handles reading/writing to `db.json`.
