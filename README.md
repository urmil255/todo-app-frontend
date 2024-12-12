# **Todo App Frontend Setup Guide**

This document provides **step-by-step instructions** for cloning, setting up, and running the **frontend** of the Todo App locally. Once set up, the application will be accessible at **http://localhost:3000** (frontend).

## **Frontend Setup**
1. Clone the Frontend Repository:  
   Open a new terminal and run the following commands:  
   `git clone https://github.com/urmil255/todo-app-frontend.git`  
   `cd todo-app-frontend`  

2. Install Frontend Dependencies:  
   Install the required Node.js dependencies using the command:  
   `npm install`  

3. Configure the API Endpoint:  
   Update the backend API URL in the `utils/api.ts` file to match your backend:  
   `const API_BASE_URL = "http://localhost:3001";`  

4. Start the Frontend Server:  
   Start the frontend server using the command:  
   `npm run dev`  
   The frontend application will start at **http://localhost:3000**.

## **Access the Todo App**
1. Open the App in Your Browser:  
   - Frontend: **http://localhost:3000**  
   - Backend (API): **http://localhost:3001/api/tasks**  

2. Features:  
   - Add new tasks with a title and color.  
   - View all tasks.  
   - Edit or delete tasks.
