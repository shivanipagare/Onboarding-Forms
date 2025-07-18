# Onboarding-Forms
# Investor & Startup Onboarding Forms (MERN Stack)

# Features
- Separate onboarding forms for Investors and Startups
- Forms collect relevant information for matching/recommendation purposes
- Data stored in MongoDB Atlas using Mongoose
- Backend API using Node.js + Express
- Frontend using React (no external UI libraries, only CSS)
- Environment variables managed with .env

# Tech Stack
Frontend: React, CSS
Backend: Node.js, Express.js
Database: MongoDB Database

# How to Run Locally
git clone https://github.com/shivanipagare/Onboarding-Forms.git
cd booking

cd backend
npm install
# create .env in backend
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/databasename
npm start

cd frontend
npm install

# create .env in frontend
REACT_APP_API_URL=http://localhost:5000
npm start











