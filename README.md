# 🔐 Auth 2.0 - Node.js Authentication System

![Primary Logo](https://cdn-icons-png.flaticon.com/512/3043/3043788.png)

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-14.x-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.x-brightgreen.svg)](https://www.mongodb.com/)

</div>

---

## 🚀 Overview

**Auth 2.0** is a robust and secure user authentication and authorization boilerplate built with Node.js, Express, MongoDB, and Passport.js. It provides a complete solution for managing user sign-up, login, and sessions, including social authentication with Google OAuth 2.0.

This project serves as a perfect starting point for any application requiring user accounts, protected routes, and session management. It uses EJS for simple server-side rendering of views.

---

## ✨ Features

* **Local Authentication:** Secure user registration and login using email and password.
* **Password Hashing:** Passwords are never stored in plain text. Uses `bcrypt` for strong hashing.
* **Google OAuth 2.0:** Allow users to sign in with their Google accounts for a seamless experience.
* **Session Management:** Persistent login sessions using `express-session` and `connect-mongo` to store sessions in the database.
* **Protected Routes:** Middleware to easily protect routes and ensure only authenticated users can access them (e.g., the dashboard).
* **Structured & Scalable:** Organized codebase with a clear separation of concerns (routes, models, config) for easy maintenance and scaling.
* **Environment-Based Configuration:** Securely manage keys and secrets using a `.env` file.

---

## 🛠️ Technology Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB with Mongoose ODM
* **Authentication:** Passport.js (`passport`, `passport-local`, `passport-google-oauth20`)
* **Password Hashing:** `bcrypt`
* **Session Store:** `express-session`, `connect-mongo`
* **View Engine:** EJS (Embedded JavaScript)
* **Environment Variables:** `dotenv`
* **Development:** `nodemon` for live server reloading

---

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:
* [Node.js](https://nodejs.org/) (v14 or higher recommended)
* [NPM](https://www.npmjs.com/get-npm)
* [MongoDB](https://www.mongodb.com/try/download/community) installed and running, or a connection URI from a service like MongoDB Atlas.

### Installation & Setup

1.  **Clone the Repository**
    ```sh
    git clone [https://github.com/aaditya0004/auth-2.0.git](https://github.com/aaditya0004/auth-2.0.git)
    cd auth-2.0
    ```

2.  **Install Dependencies**
    ```sh
    npm install
    ```

3.  **Set Up Environment Variables**
    Create a `.env` file in the root of the project directory and add the following variables. Replace the placeholder values with your actual credentials.

    ```env
    # Your MongoDB Connection URI
    MONGO_URI=mongodb+srv://<user>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority

    # Google OAuth Credentials from Google Cloud Console
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret

    # A random string for the session secret
    SESSION_SECRET=keyboard cat
    ```
    > **Note:** You can get your Google OAuth credentials from the [Google Cloud Console](https://console.cloud.google.com/).

4.  **Run the Application**
    For development, run the server with `nodemon`. This will automatically restart the server when you make changes.
    ```sh
    npm run dev
    ```
    For production, use:
    ```sh
    npm start
    ```

The application will be available at `http://localhost:3000`.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

<p align="center">
  Developed by Aaditya
</p>