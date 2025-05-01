# Feedback System

A full-stack feedback management application built with **React (frontend)** and **Express + MongoDB (backend)**.

---

## 📁 Project Structure

```
feedback-system/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
├── package.json (root)
```

---

## ⚙️ Prerequisites

- Node.js and npm installed
- MongoDB Atlas URI (placed in `.env`)

---

## 🛠️ Environment Setup

Create a `.env` file in the root or in the `backend/` folder (whichever your server is reading) with:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 🧹 Install Dependencies

### 🔹 Option 1: Install frontend and backend separately

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd backend
npm install
```

### 🔸 Option 2: Install everything from root

```bash
npm run install
```

> This uses the `concurrently` package to install both frontend and backend.

---

## 🚀 Running the App

### 🔹 To run backend only

```bash
cd backend
node server.js
```

### 🔹 To run frontend only

```bash
cd frontend
npm start
```

### 🔸 To run both frontend and backend together

```bash
npm run start
```

> The root-level `start` script uses `concurrently` to launch both.

---

## 🌐 Accessing the App

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000/feedback`

---

## 📦 Scripts Summary

| Command               | Description                       |
|-----------------------|-----------------------------------|
| `npm run install`     | Installs frontend & backend       |
| `npm start`           | Starts both frontend & backend    |
| `npm run build`       | Builds the React frontend         |

---

## 📄 License

MIT

---

> Made with ❤️ by Sri Ram

