# 🏢 Outworkx - Coworking Space Platform
## Live at: https://outworkx.com/

## 📌 Project Overview
Outworkx is a coworking space booking platform built using **React** and **Tailwind CSS**. It allows authenticated users to list new coworking spaces through a multi-step process, browse available spaces on the home page, and book spaces based on their needs. All API requests are handled using **Postman Collection**.

## 🚀 Features
- 🏠 **Home Page**: Displays a list of all coworking spaces.
- ➕ **List a Space**: Authenticated users can add a new space using a multi-step process.
- 🔑 **Authentication**: Users must **sign up** or **log in** to create and book spaces.
- 📌 **Space Details**: Each space has a dedicated details page showing its description, amenities, and availability.
- 📅 **Booking Functionality**: Users can book available coworking spaces.

## 🛠️ Tech Stack
- **Frontend**: React, Tailwind CSS
- **API Handling**: Postman Collection
- **State Management**: React Context API

## 📂 Project Structure
```
📦 outworkx
 ┣ 📂 src
 ┃ ┣ 📂 components   # Reusable UI components
 ┃ ┣ 📂 pages        # Application pages (Home, SpaceDetails, etc.)
 ┃ ┣ 📂 hooks        # Custom hooks (e.g., useAuthContext, useCreateSpaceContext)
 ┃ ┣ 📂 context      # Global state management
 ┃ ┗ 📂 assets       # Static assets (icons, images, etc.)
 ┣ 📜 README.md      # Project documentation
 ┣ 📜 package.json   # Dependencies and scripts
 ┗ 📜 .gitignore     # Ignored files in Git
```

## 🔧 Setup & Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/outworkx.git
cd outworkx
```
### 2️⃣ Install Dependencies
```sh
yarn install  # or npm install
```
### 3️⃣ Start the Development Server
```sh
yarn start  # or npm start
```
The project will be available at `http://localhost:3000/`.

## 🔐 Authentication & Access
- Only **authenticated users** can create and book spaces.
- If a user is not logged in, they will be redirected to the login page.

## 📌 API Integration
All API endpoints are managed using **Postman Collection**.
- `POST /v1/space/create` → Create a new coworking space.
- `GET /v1/space/list` → Retrieve all spaces.
- `POST /v1/booking/create` → Book a space.
- Authentication APIs for sign-up and login.

## 🌿 Branching Strategy
- **`main`** → Production-ready code
- **`develop`** → Active development branch
- **`feature/{name}`** → Feature-specific branches (e.g., `feature/create-space`)

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Added new feature'`)
4. Push the branch (`git push origin feature-name`)
5. Create a Pull Request

## 🎥 Demo
1.👉 **[Click here to watch the demo](https://drive.google.com/file/d/1sH_oQ998vTFaCewPhcoMXAZ_-Z7J1yK5/view?usp=sharing)**
-
2.👉 **[Click here to watch the demo](https://drive.google.com/file/d/1wlK7A4K7-cFKirg-ZH0PdYWpBvIuRkBi/view?usp=sharing)**


---
💡 *Feel free to contribute and make improvements!*


