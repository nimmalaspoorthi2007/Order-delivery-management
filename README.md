🍔 Food Delivery MERN Stack Application

A full-stack Food Delivery Web Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with complete user authentication, cart management, admin dashboard, order tracking, and online payment integration. This application provides a modern food ordering experience where users can browse foods, place orders, track delivery status, and admins can manage foods and customer orders efficiently.

🚀 Features
👤 User Features
User Registration & Login
JWT Authentication
Secure Password Hashing using bcrypt
Browse Food Items
Search & Filter Foods
Add to Cart
Remove Items from Cart
Place Orders
Razorpay Payment Integration
Order Tracking System
User Profile Page
Responsive Mobile UI
Dark Mode Support
Protected Routes
🛠️ Admin Features
Admin Authentication
Add New Food Items
Manage Food Categories
View All Orders
Update Order Status
Order Management Dashboard
Restrict Admin Routes
Dynamic Food Management using MongoDB
🧰 Technologies Used
Frontend
React.js
React Router DOM
Axios
CSS3
HTML5
JavaScript (ES6)
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT (jsonwebtoken)
bcryptjs
Razorpay
dotenv
cors
Database
MongoDB Atlas
Deployment Platforms
Frontend: Vercel
Backend: Render
Database: MongoDB Atlas
📂 Project Structure
food-delivery-app/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│
├── server/                 # Node Backend
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
└── README.md
🔐 Authentication System

The application uses JWT Authentication for secure login and route protection.

Authentication Features
Register New Users
Login Existing Users
JWT Token Generation
Password Encryption using bcrypt
Protected Routes
Admin Authorization
User Session Management using localStorage
🛒 Cart Management

Users can:

Add Food Items to Cart
Remove Items from Cart
View Total Price
Store Cart Data in localStorage
Proceed to Payment
💳 Razorpay Payment Gateway

Integrated Razorpay payment system for online payments.

Payment Flow
Cart → Pay Now → Razorpay Checkout → Payment Success → Order Saved
Razorpay Features
Secure Online Payments
Test Mode Support
Dynamic Order Creation
Payment Confirmation
📦 Order Management System
User Side
Place Orders
Track Order Status
View Previous Orders
Admin Side
View All Customer Orders
Update Order Status
Manage Deliveries
📍 Order Tracking System

Order statuses include:

Order Placed
Preparing
Out for Delivery
Delivered

Real-time status updates are reflected on both:

User Orders Page
Admin Dashboard
🍕 Food Management System

Foods are dynamically stored in MongoDB.

Admin Can:
Add New Foods
Add Food Images
Add Categories
Set Prices
Food Data Includes:
Food Name
Price
Category
Food Image
🔎 Search & Filter System

Implemented dynamic filtering functionality:

Search by Food Name
Filter by Category
Responsive Search UI
🌙 Dark Mode

Dark mode support implemented using:

CSS Theme Switching
Dynamic Body Class Toggle
Responsive Theme UI
📱 Responsive Design

The application is fully responsive and optimized for:

Mobile Devices
Tablets
Desktop Screens

Implemented using:

CSS Flexbox
CSS Grid
Media Queries
🔒 Route Protection

Implemented protected routes for:

Cart Page
Orders Page
Admin Dashboard

Unauthorized users are automatically redirected to login.

⚡ API Endpoints
Authentication APIs
POST /api/auth/register
POST /api/auth/login
Food APIs
GET /api/foods
POST /api/foods
Order APIs
POST /api/orders
GET /api/orders/:userId
POST /api/orders/admin/all
PUT /api/orders/admin/status/:id
Payment APIs
POST /api/payment/create-order
⚙️ Environment Variables

Create a .env file inside server/

PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_jwt_secret

RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
▶️ Installation & Setup
Clone Repository
git clone https://github.com/your-username/food-delivery-app.git
Frontend Setup
cd client
npm install
npm run dev
Backend Setup
cd server
npm install
npm run dev
🌐 Deployment
Frontend Deployment

Deploy React frontend using:

Vercel
Backend Deployment

Deploy Express backend using:

Render
Database Hosting

Use:

MongoDB Atlas
🧠 Concepts Implemented
MERN Stack Architecture
REST APIs
CRUD Operations
Authentication & Authorization
JWT Security
Payment Gateway Integration
State Management
MongoDB Database Design
API Communication using Axios
Responsive UI Design
Protected Routing
📸 Future Enhancements
Live Order Tracking using Socket.io
Push Notifications
Google Authentication
Cloudinary Image Upload
AI Food Recommendation
Multi Restaurant Support
Delivery Partner Tracking
Coupon & Offers System
👨‍💻 Developed By

Nimmala Spoorthi

Full Stack MERN Developer

⭐ Conclusion

This project demonstrates a complete real-world Food Delivery Application built using modern web technologies and industry-level architecture. It showcases full-stack development concepts including frontend development, backend APIs, authentication, database integration, payment gateway integration, admin management, and deployment workflows. 
compress few lines# Order-delivery-management
