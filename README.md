🚗 CarRental – Enterprise-Grade Scalable Car Rental Platform

A production-ready, full-stack car rental system built using the MERN Stack (MongoDB, Express.js, React.js, Node.js), designed with scalability, security, performance, and clean architecture in mind.

🌍 Live Application

🔗 Live Demo: https://car-rental-seven-kappa.vercel.app/

📦 Repository: https://github.com/lamecoder03/CarRentalSite

## 📌 Overview

**CarRental** is a scalable full-stack web application that allows users to browse available vehicles, book rentals, and manage their reservations, while giving administrators complete control over vehicle inventory and bookings.

### 🚀 Key Features

- 🔐 Secure JWT-based authentication  
- 🛡️ Role-Based Access Control (RBAC) for users and admins  
- 🧩 Modular and maintainable backend architecture  
- ☁️ Cloud-hosted database for scalability and reliability  
- 🖼️ Optimized image delivery using CDN  
- 🌐 Production-ready deployment  

---

This project is designed with **real-world system design principles**, focusing on scalability, security, and clean architecture — not just basic CRUD functionality.


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
# 🚗 Car Rental Platform — System Architecture & Technical Overview

## 🔷 Architectural Principles Used

- RESTful API Architecture (Representational State Transfer)
- Stateless Authentication using JWT (JSON Web Token)
- Modular MVC Pattern (Model–View–Controller)
- Separation of Concerns
- Scalable Cloud Deployment
- CDN-based Media Optimization

---

## 🔄 Application Flow

### 🔹 User Journey

1. User visits platform  
2. Registers / Logs In  
3. JWT token issued  
4. User browses cars  
5. Selects booking dates  
6. Booking request sent to backend  
7. Availability validated  
8. Booking stored in MongoDB  
9. Dashboard updated  

### 🔹 Admin Flow

1. Admin logs in  
2. JWT verified via middleware  
3. Accesses protected admin routes  
4. Adds / edits / deletes cars  
5. Manages bookings  

---

## 🚀 Core Features

### 👤 User Features

- Secure Authentication (JWT)
- Browse & Filter Cars
- Real-Time Booking Management
- Booking Dashboard
- Responsive UI

### 👨‍💼 Admin Features

- Car Inventory Management
- Booking Oversight
- Role-Based Route Protection
- Image Upload & Optimization

---

## 🛠️ Tech Stack

### 🎨 Frontend

- React.js — Component-based UI library  
- Tailwind CSS — Utility-first styling framework  
- React Router DOM — Client-side routing  

### 🖥 Backend

- Node.js — JavaScript runtime  
- Express.js — Backend framework  
- RESTful APIs  
- Middleware-based architecture  
- JWT Authentication  

### 🗄 Database & Cloud

- MongoDB — NoSQL database  
- MongoDB Atlas — Managed cloud database  
- Mongoose — ODM (Object Data Modeling)  

### 🖼 Media Optimization

- ImageKit — CDN-based optimized image hosting  

---

## 🔐 Security Architecture

### JWT Authentication Flow

```
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
```

### Role-Based Access Control (RBAC)

- **Users →** Can book cars  
- **Admin →** Can manage cars & bookings  

#### Protected Route Example

```js
if (user.role !== "admin") {
  return res.status(403).json({ message: "Access Denied" });
}
```

---

## 📊 Database Schema Design

### Users Collection

- name  
- email (indexed, unique)  
- password (hashed with bcrypt)  
- role (user/admin)  

### Cars Collection

- title  
- brand  
- pricePerDay  
- availability  
- imageURL  

### Bookings Collection

- userId (reference)  
- carId (reference)  
- startDate  
- endDate  
- totalPrice  

### Indexing Strategy

- email → Unique index  
- car availability → Indexed  
- booking dates → Indexed  

**Benefits**

- Faster search  
- Efficient authentication lookup  
- Improved booking validation performance  

---

## ⚡ Performance Engineering

### Optimizations Implemented

- Stateless APIs  
- Modular backend separation  
- Efficient MongoDB queries  
- CDN image delivery  
- Environment-based configuration  

### Scalability Strategy (Enterprise-Ready)

If scaled to **100,000+ users**:

- Horizontal scaling with load balancer  
- Redis caching layer  
- Database sharding  
- Rate limiting middleware  
- Docker containerization  
- Auto-scaling infrastructure  

---

## 🧠 Race Condition Handling (Double Booking Prevention)

### Problem

Two users booking the same car simultaneously.

### Solution Strategy

- Validate availability before booking  
- Use atomic update queries  
- Implement database transactions (if needed)  
- Lock booking window logic  

---

## 📦 API Design Overview

### Authentication Routes

- `POST /api/auth/register`  
- `POST /api/auth/login`  

### Car Routes

- `GET /api/cars`  
- `POST /api/cars` (Admin)  
- `PUT /api/cars/:id`  
- `DELETE /api/cars/:id`  

### Booking Routes

- `POST /api/bookings`  
- `GET /api/bookings/user`  

---

## 🧪 Validation & Error Handling

- Middleware-based validation  
- Proper HTTP status codes  
- Centralized error handler  
- Input sanitization  
- Server-side validation  

---
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

## 🏁 Summary

This project demonstrates a production-ready full-stack architecture with secure authentication, scalable backend design, performance optimizations, and enterprise-level engineering considerations.
