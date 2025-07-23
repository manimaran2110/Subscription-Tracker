# 📦 Subscription Tracker API

A full-stack **subscription management** web application backend, allowing users to track their subscriptions, payment due dates, notifications, and more.

This project is based on modern web technologies and integrates backend features like cron jobs, RESTful API endpoints, and database storage to give users a seamless experience in managing their recurring expenses.

---

## 🚀 Features

- 🔒 User authentication
- 📅 Add, edit, and delete subscriptions
- ⏰ Automated due-date reminders
- 📤 Email notifications
- 📂 Organized database structure using MongoDB
- 🌐 REST API routes for integration with frontend

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js** – Backend server
- **MongoDB** + **Mongoose** – Database and ODM
- **Nodemailer** – Email notification system
- **Cron Jobs** – Scheduled reminders
- **Dotenv** – Environment variable management

---

## 📁 Folder Structure

subscription-tracker-api/
│
├── config/ # Environment and Upstash configuration
├── controllers/ # Core logic for subscriptions and user routes
├── models/ # Mongoose models for User and Subscription
├── routes/ # Express routes for API endpoints
├── utils/ # Utility functions (e.g., send emails)
├── app.js # Entry point of the server
├── .env.example # Example environment configuration
└── package.json # Project metadata and scripts

yaml
Copy
Edit

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/subscription-tracker-api.git
cd subscription-tracker-api
Replace your-username with your GitHub username.

2. Install Dependencies
bash
Copy
Edit
npm install
3. Set Up Environment Variables
Create a .env.development.local file in the root directory and add the following:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5500
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
UPSTASH_URL=your_upstash_url
QSTASH_TOKEN=your_qstash_token
✅ Use the .env.example file as a reference.

▶️ Run the Development Server
bash
Copy
Edit
npm run dev
Then visit: http://localhost:5500

📬 Email & Notification System
Automatically checks for upcoming due dates using cron jobs

Sends email notifications to users in advance

🤝 Contributing
Pull requests and issues are welcome!
If you face any bugs or want to improve something, feel free to open an issue or fork the repo.
