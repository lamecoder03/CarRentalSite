🚗 CarRental – Enterprise-Grade Scalable Car Rental Platform

A production-ready, full-stack car rental system built using the MERN Stack (MongoDB, Express.js, React.js, Node.js), designed with scalability, security, performance, and clean architecture in mind.

🌍 Live Application

🔗 Live Demo: https://car-rental-seven-kappa.vercel.app/

📦 Repository: https://github.com/lamecoder03/CarRentalSite

📌 Overview

CarRental is a scalable web application that enables users to browse vehicles, book rentals, and manage reservations while providing administrators with full control over inventory and bookings.

The system is built with:

Secure JWT-based authentication

Role-Based Access Control (RBAC)

Modular backend architecture

Cloud-hosted database

Optimized image delivery via CDN

Production deployment

This project reflects real-world system design thinking, not just CRUD implementation.

```🏗️ Enterprise-Level System Architecture
🔷 High-Level Architecture Diagram
                        ┌───────────────────────────┐
                        │        Client (User)      │
                        │  React.js + Tailwind CSS  │
                        └─────────────┬─────────────┘
                                      │
                                      ▼
                        ┌───────────────────────────┐
                        │     Vercel (Frontend)     │
                        │  Static + SSR Deployment  │
                        └─────────────┬─────────────┘
                                      │
                                      ▼
                        ┌───────────────────────────┐
                        │   Express.js API Server   │
                        │     Node.js Runtime       │
                        └─────────────┬─────────────┘
                                      │
                 ┌────────────────────┼────────────────────┐
                 ▼                    ▼                    ▼
      ┌────────────────┐   ┌────────────────┐   ┌────────────────┐
      │ MongoDB Atlas  │   │   ImageKit CDN │   │ Auth Middleware │
      │  Cloud DB      │   │ Optimized Img  │   │ JWT Validation  │
      └────────────────┘   └────────────────┘   └────────────────┘
```
🔷 Architectural Principles Used

RESTful API Architecture (Representational State Transfer)

Stateless Authentication using JWT (JSON Web Token)

Modular MVC Pattern (Model-View-Controller)

Separation of Concerns

Scalable Cloud Deployment

CDN-based Media Optimization

🔄 Application Flow
🔹 User Journey

User visits platform

Registers / Logs In

JWT token issued

User browses cars

Selects booking dates

Booking request sent to backend

Availability validated

Booking stored in MongoDB

Dashboard updated

🔹 Admin Flow

Admin logs in

JWT verified via middleware

Accesses protected admin routes

Adds / edits / deletes cars

Manages bookings

🚀 Core Features
👤 User Features

Secure Authentication (JWT)

Browse & Filter Cars

Real-Time Booking Management

Booking Dashboard

Responsive UI

👨‍💼 Admin Features

Car Inventory Management

Booking Oversight

Role-Based Route Protection

Image Upload & Optimization

🛠️ Tech Stack
🎨 Frontend

React.js – Component-based UI library

Tailwind CSS – Utility-first styling framework

React Router DOM – Client-side routing

🖥 Backend

Node.js – JavaScript Runtime Environment

Express.js – Backend framework

RESTful APIs

Middleware-based architecture

JWT Authentication

🗄 Database & Cloud

MongoDB – NoSQL (Not Only SQL) Database

MongoDB Atlas – Managed cloud database

Mongoose – Object Data Modeling (ODM)

🖼 Media Optimization

ImageKit – CDN (Content Delivery Network) based optimized image hosting

🔐 Security Architecture
JWT Authentication Flow
User Login
   ↓
Server Verifies Credentials
   ↓
JWT Token Generated
   ↓
Token Stored on Client
   ↓
Token Sent in Authorization Header
   ↓
Middleware Validates Token
   ↓
Access Granted

Role-Based Access Control (RBAC)

Users → Can book cars

Admin → Can manage cars & bookings

Protected Routes Example:

if (user.role !== "admin") {
   return res.status(403).json({ message: "Access Denied" });
}

📊 Database Schema Design
Users Collection

name

email (indexed)

password (hashed with bcrypt)

role (user/admin)

Cars Collection

title

brand

pricePerDay

availability

imageURL

Bookings Collection

userId (Reference)

carId (Reference)

startDate

endDate

totalPrice

Indexing Strategy

email → Unique Index

car availability → Indexed

booking dates → Indexed

This improves:

Search speed

Authentication lookup

Booking validation performance

⚡ Performance Engineering
Optimizations Implemented

Stateless APIs

Modular backend separation

Efficient MongoDB queries

CDN image delivery

Environment-based configuration

Scalability Strategy (Enterprise Thinking)

If scaled to 100,000+ users:

Horizontal scaling with Load Balancer

Redis (Remote Dictionary Server) caching layer

Database sharding

Rate limiting middleware

Docker containerization

Auto-scaling infrastructure

🧠 Race Condition Handling (Double Booking Prevention)

Problem:
Two users booking same car simultaneously.

Solution Strategy:

Validate availability before booking

Use atomic update queries

Implement database transactions (if needed)

Lock booking window logic

📦 API Design Overview
Authentication Routes

POST /api/auth/register

POST /api/auth/login

Car Routes

GET /api/cars

POST /api/cars (Admin)

PUT /api/cars/:id

DELETE /api/cars/:id

Booking Routes

POST /api/bookings

GET /api/bookings/user

🧪 Validation & Error Handling

Middleware-based validation

Proper HTTP status codes

Centralized error handler

Input sanitization

Server-side validation

```📂 Project Structure
CarRentalSite/
│
├── client/
│   ├── components/
│   ├── pages/
│   └── routes/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── utils/
```
📈 Engineering Decisions & Tradeoffs
Why MongoDB?

Flexible schema

Faster prototyping

Document-based storage aligns with car-booking structure

Why JWT instead of Sessions?

Stateless architecture

Better for distributed systems

Scales horizontally

Why CDN for Images?

Reduces backend load

Faster global delivery

Improves performance metrics

🔮 Future Enterprise Improvements

Payment Gateway Integration (Stripe / Razorpay)

Redis caching layer

Booking conflict resolution queue

WebSockets for real-time booking updates

Admin analytics dashboard

Elasticsearch integration

CI/CD pipeline setup

Docker-based container orchestration

📊 System Design Depth (For Interviews)

This project demonstrates:

Full-stack architecture design

Authentication & authorization logic

REST API modeling

Database indexing strategies

Scalability considerations

Production deployment

Business-focused engineering mindset

📚 What I Learned

Through this project, I developed:

End-to-end system thinking

Clean API structuring

Secure authentication design

Performance optimization mindset

Deployment experience

Cloud database management

More importantly, I learned that backend architecture directly affects:

User experience

Infrastructure cost

Business scalability

👨‍💻 Author

Archit Adnaik
IIT ISM Dhanbad
Competitive Programmer (600+ problems solved)

⭐ Final Note

This project is not just a CRUD application.
It reflects scalable backend architecture, secure authentication, production deployment, and real-world engineering decisions.
