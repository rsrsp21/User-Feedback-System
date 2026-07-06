# User Feedback System

A full-stack web application for collecting, storing, and reviewing user feedback.

The app lets users submit feedback through a form, and provides a dashboard where submitted feedback can be viewed and filtered by name, email, category, and date range.

## Features

- Submit feedback with name, email, category, and message
- Categorize feedback as suggestion, bug report, or feature request
- Store feedback in MongoDB
- View all submitted feedback in a dashboard
- Filter feedback by user name, email, category, start date, and end date
- Separate frontend and backend applications

## Tech Stack

### Frontend

- React
- Axios
- React Icons
- CSS utility classes

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- dotenv

## Project Structure

```text
user-feedback-system/
|-- backend/
|   |-- models/
|   |   `-- feedback.js
|   |-- routes/
|   |   `-- feedback.js
|   |-- package.json
|   `-- server.js
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |   |-- FeedbackDashboard.js
|   |   |   |-- FeedbackForm.js
|   |   |   `-- Sidebar.js
|   |   |-- App.js
|   |   `-- index.js
|   `-- package.json
|-- package.json
`-- README.md
```

## Prerequisites

- Node.js
- npm
- MongoDB connection string, either from MongoDB Atlas or a local MongoDB instance

## Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

If `MONGO_URI` is not provided, the backend falls back to:

```text
mongodb://localhost:27017/feedbackDB
```

## Installation

Install frontend and backend dependencies from the root folder:

```bash
npm run install
```

You can also install them separately:

```bash
cd frontend
npm install
```

```bash
cd backend
npm install
```

## Running the Application

Start both the frontend and backend from the root folder:

```bash
npm start
```

Or run each app separately:

```bash
cd backend
node server.js
```

```bash
cd frontend
npm start
```

## Local URLs

- Frontend: `http://localhost:3000`
- Backend feedback API: `http://localhost:5000/feedback`

## API Endpoints

### Create Feedback

```http
POST /feedback
```

Request body:

```json
{
  "userName": "Jane Doe",
  "email": "jane@example.com",
  "feedbackText": "The dashboard is easy to use.",
  "category": "suggestion"
}
```

### Get Feedback

```http
GET /feedback
```

Returns all feedback records stored in MongoDB.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run install` | Installs frontend and backend dependencies |
| `npm start` | Starts frontend and backend together |
| `npm run build` | Builds the React frontend |

## License

This project is licensed under the MIT License.
