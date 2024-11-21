# 🚀 Bg Gone - A Background Removal SAAS App 🚀
Bg Gone is a Software-as-a-Service (SAAS) application that allows users to remove the background from images effortlessly. Built using the MERN (MongoDB, Express, React, Node.js) stack, this app provides a smooth and user-friendly experience. Every user is granted 5 free credits upon registration to explore the functionality. Additional credits can be purchased as needed to continue using the service.

## 🎥 Demo
You can check out the live demo of the blog website here: [Deployed Blog Website](https://bg-gone-front.vercel.app/)

Feel free to explore, create an account, and start experimenting!

## Table of Contents 
1. Features
2. Technologies Used
3. Installation and Setup
4. Usage
5. Authentication
6. Credits and Payment Integration
7. Folder Structure

## ✨ Features
- **Background Removal**: Upload an image, and the app processes it to remove the background.
- **User Authentication**: Secure login and signup functionality using Clerk.
- **Free Credits**: New users receive 5 free credits to explore the app.
- **Credit Purchase**: Seamless integration with Razorpay to purchase additional credits.
- **Responsive Design**: The application works well on both desktop and mobile devices.
- **Real-Time Notifications**: Instant feedback and updates via React Toastify.

## 🔧 Technologies Used

**Frontend**
- React: Core framework for building the UI.
- React Router DOM: Handles client-side routing for smooth navigation.
- React Toastify: Provides toast notifications for alerts and updates.
- Vite: Used as the build tool for faster development.
- Axios: Manages HTTP requests to the backend.

**Backend**
- Express.js: Backend framework for handling server-side logic.
- MongoDB: Database for storing user information, credits, and transaction details.
- Mongoose: ODM library to interact with MongoDB.
- Axios: Facilitates API calls.
- Cors: Enables cross-origin requests.
- Dotenv: Manages environment variables.
- Form-Data: Handles file uploads.
- Jsonwebtoken: Provides secure user session management.
- Multer: Manages file uploads efficiently.
- Razorpay: Payment gateway integration for credit purchases.
- Svix: Implements webhooks for real-time updates.

**Authentication**
- Clerk: Manages user authentication and ensures secure access to the platform.

## 🛠️ Installation and Setup

**Prerequisites:**
Ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- A Clerk account for authentication

## Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dhairya-Dave-0204/Bg-Gone.git
   cd Bg-Gone```

2. Set up the environment variables:
Create a .env file in both the frontend and backend directories. Add the following variables:
- Frontend (.env):
  ```bash
  VITE_BACKEND_URL=<backend_url>  
  VITE_CLERK_PUBLISHABLE_KEY=<clerk_publishable_key>```
- Backend (.env):
  ```bash
  MONGO_URI=<mongodb_connection_string>  
  JWT_SECRET=<your_jwt_secret>  
  CLERK_SECRET_KEY=<clerk_secret_key>  
  RAZORPAY_KEY_ID=<razorpay_key_id>  
  RAZORPAY_KEY_SECRET=<razorpay_key_secret>```

3. Install dependencies for both frontend and backend:
   ```bash
   cd frontend  
   npm install  
   cd ../backend  
   npm install```

4. Start the application:
   - Backend
     ```bash
     npm start```
   - Frontend
     ```bash
     npm run dev```

## 🚀 Usage
Sign Up/Log In: Access the app securely using Clerk authentication.
Background Removal: Navigate to the upload section, select an image, and click Remove Background.
Credit Management: Monitor your available credits in the dashboard. You can purchase additional credits when needed.
Notifications: Get instant updates on the status of your uploads and purchases.

## 🪪 Authentication
The app leverages Clerk for authentication. This ensures that user data and sessions are securely managed. With Clerk, you get:
- Social login support (e.g., Google, Facebook).
- Two-factor authentication (optional).
- A smooth and customizable login/signup experience.

## 💵 Credits and Payment Integration
- **Free Credits**: Every new user is assigned 5 free credits. Each credit allows for one background removal.
- **Purchasing Credits**: Users can buy additional credits using the Razorpay integration.
  - Credits are added instantly upon successful payment.
  - Transactions are logged and viewable in the user dashboard.

## 📁 Folder Structure
```bash
Bg-Gone/  
├── frontend/  
│   ├── src/  
│   │   ├── components/    // Reusable React components  
│   │   ├── pages/         // Application pages  
│   │   ├── assets/        // Static assets (images, CSS)  
│   │   └── utils/         // Utility functions  
│   └── public/            // Publicly accessible files  
├── backend/  
│   ├── models/            // MongoDB schemas  
│   ├── routes/            // API endpoints  
│   ├── controllers/       // Request handling logic  
│   ├── middlewares/       // Middleware functions  
│   └── utils/             // Helper functions and configurations  
└── README.md              // Documentation  ```
