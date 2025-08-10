# 📚 ResearchRabbit Clone (MVP)

A minimal open-source clone of [ResearchRabbit](https://researchrabbit.ai/) — built with **Node.js**, **Express**, **MongoDB**, and **React**.  
This project allows users to search research papers, visualize related works in a graph, and save them into collections.

---

## 🚀 Features
- **User Authentication** (JWT-based)
- **Paper Search** (via Semantic Scholar API)
- **Graph Visualization** (Cytoscape.js)
- **Collections Management**
- **Responsive UI** (Tailwind CSS)
- **REST API Backend**

---

## 🛠️ Tech Stack

**Frontend**
- React.js (Vite)
- Tailwind CSS
- Cytoscape.js (Graph visualization)

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication

---

## 📂 Project Structure
Research Rabbit Clone/
│
├── backend/ # Node.js + Express API
│ ├── server.js # Entry point
│ ├── routes/ # API routes
│ ├── models/ # Mongoose schemas
│ ├── controllers/ # Route controllers
│ ├── middleware/ # Auth middleware
│ └── config/ # DB & config files
│
└── frontend/ # React app
├── src/
│ ├── components/ # UI components
│ ├── pages/ # Pages & screens
│ ├── services/ # API calls
│ └── App.jsx
└── vite.config.js
