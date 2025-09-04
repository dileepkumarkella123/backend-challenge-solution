Perfect 👍 If you’re writing your own `README.md`, here’s the **basic structure you should follow** (you can add/remove points depending on what you want to highlight):

---

# 📌 Backend Challenge Solution

## 🚀 Live API

* Base URL: `https://backend-challenge-solution.onrender.com`

## 📖 API Endpoints

### ➤ Get all tasks

```http
GET /api/tasks
```

### ➤ Create a task

```http
POST /api/tasks
Content-Type: application/json

{
  "title": "Finish Assignment",
  "description": "Complete PearlThoughts backend challenge"
}
```

### ➤ Update a task

```http
PUT /api/tasks/:id
Content-Type: application/json

{
  "title": "Updated Task",
  "description": "Now completed",
  "completed": true
}
```

### ➤ Delete a task

```http
DELETE /api/tasks/:id
```

---

## 🛠 How to Run Locally

1. Clone repo:

   ```sh
   git clone https://github.com/dileepkumarkella123/backend-challenge-solution.git
   cd backend-challenge-solution
   ```
2. Install dependencies:

   ```sh
   npm install
   ```
3. Start server:

   ```sh
   npm run dev
   ```
4. API runs at:

   ```
   http://localhost:3000
   ```

---

## 📹 Screencast (Demo Video)

(Add your Loom / YouTube / Drive link here after recording)

---

## ✅ Features

* Create, Read, Update, Delete (CRUD) tasks
* RESTful API design
* Deployed on **Render**
* Written in **TypeScript + Express.js**

---
