# 👥 Users-List App

A simple user listing interface built with **React**, allowing users to browse, search, filter, and view detailed profiles using the JSONPlaceholder mock API.

> 📝 **Note:** This app is powered entirely by mock data from [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com). It does not require any backend setup.

---

## 🔧 Features

- 🔄 Fetches user data from a public API  
- 🔍 Real-time search by name or email  
- 🏙️ Filter users by city  
- 📋 Display users in a clean table layout  
- 👤 View detailed information about a selected user  
- 🌀 Skeleton loader while data is being fetched  
- 📱 Fully responsive layout and navigation using React Router  

---

## 📸 Screenshots

### 📋 Dashboard Page
Displays a table of users with basic information (name, email, city, and phone). Clickable rows redirect to the user's detail page.  
![Dashboard Screenshot](screenshots/Screenshot(1).png)

### 🔍 Search Page
Allows searching users by name or email with instant filtering.  
![Search Screenshot](screenshots/Screenshot(2).png)

### 🏙️ Filter Page
Filter users by city using a dropdown.  
![Filter Screenshot](screenshots/Screenshot(3).png)
![Filter Screenshot](screenshots/Screenshot(4).png)

### 👤 User Details Page
Shows comprehensive details about a selected user including contact, address, and company info.  
![User Details Screenshot](screenshots/Screenshot(5).png)

### 🌀 Loading Skeleton
Skeleton rows are displayed while fetching data to improve user experience.  

---

## 🧑‍💻 Tech Stack

- **Frontend:** React, React Router 
- **API:** JSONPlaceholder  
- **State Management:** React `useState` and `useEffect`  
- **HTTP Client:** Axios  
- **UI/UX:** Custom CSS with responsive layout  

---

## 🛣️ App Structure

- `/` - Dashboard page displaying all users  
- `/search` - Search users by name or email  
- `/filter` - Filter users by city  
- `/users/:id` - View detailed user info  

---

## 🚀 How to Run

1. Clone the repository  
2. Install dependencies with `npm install`  
3. Start the development server with `npm start`  
4. Navigate to `http://localhost:3000/` in your browser  

---