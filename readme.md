# Project Setup Guide

This document provides detailed steps to set up the project and get it running on your local machine.

---

## 1. MongoDB Compass Setup

1. **Create a Database**
   - Open MongoDB Compass.
   - Create a database named `question`.

2. **Create a Collection**
   - Inside the `question` database, create a collection named `ques`.

3. **Import JSON File**
   - Select the `ques` collection.
   - Use the **Import Data** option to upload the provided JSON file into the `ques` collection.

4. **Connect MongoDB**
   - Click on the **Connect** button in MongoDB Compass to ensure the database is running.

---

## 2. Clone the Repository

1. Open a terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/abhijeetkumar097/speakX.git
   ```

2. Navigate to the project directory:
   ```bash
   cd speakX
   ```

---

## 3. Install Dependencies

### Frontend Setup:
1. Navigate to the Frontend folder:
   ```bash
   cd FrontEnd
   ```

2. Install the required dependencies:
   ```bash
   npm i
   ```

3. Return to the project root directory:
   ```bash
   cd ..
   ```

### Backend Setup:
1. Navigate to the Backend folder:
   ```bash
   cd BackEnd
   ```

2. Install the required dependencies:
   ```bash
   npm i
   ```

---

## 4. Start the Backend Server

1. Run the server by executing:
   ```bash
   node db.js
   ```

2. Ensure the backend is running successfully before proceeding to the frontend setup.

---

## 5. Start the Frontend

1. Split the terminal or open a new terminal.

2. Navigate to the Frontend folder:
   ```bash
   cd FrontEnd
   ```

3. Run the frontend server using:
   ```bash
   npm run dev
   ```

4. Note the URL provided in the terminal (e.g., [http://localhost:5173](http://localhost:5173)) and open it in your browser.

---

## 6. Verify Everything is Running

- The backend should be running and connected to MongoDB.
- The frontend should be accessible via the URL provided.

Enjoy using the project! If you encounter any issues, refer to this guide or check the repository documentation.

