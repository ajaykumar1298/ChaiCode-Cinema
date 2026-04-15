🎫 ChaiCode Cinema - Seat Booking App

📌Project Overview
A simplified backend system for a movie seat booking platform built using Node.js, Express, MongoDB, and JWT Authentication.

This project is an extension of an existing codebase where authentication and secure seat booking functionality has been implemented.

user can:
-Sign up / Login
-See available seats
-Book a seat(only login user)
-Logout

🛠️Tech Stack
-Frontend: HTML + Tailwind CSS + JavaScript
-Backend: Node.js + Express
-Database: MongoDB (Mongoose)
-Authentication: JWT + Cookies

🚀Features

👤Authentication
-User can register
-User can login
-JWT token stored in cookies
-User can logout

🎫Seat Booking
-Show all seats
-Green = Available
-Red = Booked
-Click to book a seat
-Shows who booked the seat

🧠 Smart Behavior
-If user already logged in → redirect to home
-If not logged in → ask to login before booking

⚙️Setup Instructions

1.Clone the repository
git clone https://github.com/ajaykumar1298/ChaiCode-Cinema.git

2.Go to Folder
cd ChaiCode-Cinema

3.install Dependencies
-npm i express mongoose jsonwebtoken bcryptjs dotev cors cookie-parser

4.Add .env file
MONGO_URI=your_mongodb_url
JWT_URI=your_secret_key

5.Run server
-node server.js

6.Server will start on:
-http://localhost:3000


🔐 API Endpoints

👤Auth
-POST /auth/register → Register user
-POST /auth/login → Login user
-POST /auth/logout → Logout user

💺Seats
-GET /seats → Get all seats
-PUT /:id/:name → Book a seat

🧠 Booking Logic Explained
Seat booking is handled using MongoDB's atomic operation:
```
findOneAndUpdate(
  { _id: seatId, isBooked: false },
  { isBooked: true, userId, name }
)
``
##Why this works:
* Ensures only unbooked seats are selected
* Prevents race conditions

❌ Duplicate Booking Prevention
- A seat can only be booked if `isBooked = false`
- Once booked, it cannot be booked again
- If already booked → API returns error

⚠️ Notes
-Password is hashed using bcrypt
-JWT is used for authentication
-Cookies are used to store token
-LocalStorage stores username for UI

💡 Future Improvements
-Add payment system 💳
-Add booking history 📜
-Add booking details 🎟️

🎯 Purpose
in this project, I have mainly focused on backend logic and authentication.
-Backend validation is not fully implemented yet
-Only basic validation is applied on frontend
This project is mainly for learning:
    -This project is mainly for learning:
    -Seat booking logic
    -API handling
