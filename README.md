# hello-react

This repository contains a React application created using Vite.

# Project Setup and Instructions

This project integrates login and logout functionality using the Asgardeo React SDK. Follow the steps below to set up and run the project.

## Prerequisites
- Node.js and npm installed on your system.
- An Asgardeo account with an application registered.

## Steps to Set Up the Project

### 0. Create a React Vite Project
- Create a new React project using Vite with the following command:
```bash
npm create vite@latest asgardeo-react -- --template react
```
- Navigate to the project directory:
```bash
cd asgardeo-react
```
- Install dependencies:
```bash
npm install
```

### 1. Install Dependencies
Run the following command to install the required dependencies:
```bash
npm install
```

### 2. Install Asgardeo React SDK
Install the Asgardeo React SDK to enable authentication functionality:
```bash
npm install @asgardeo/auth-react
```

### 3. Update `main.jsx`
Wrap the `App` component with the `AuthProvider` and configure it with your Asgardeo application details. Below is the configuration:

```javascript
const authConfig = {
  signInRedirectURL: 'http://localhost:5173',
  signOutRedirectURL: 'http://localhost:5173',
  clientID: '<your-app-client-id>',
  baseUrl: 'https://api.asgardeo.io/t/<your-organization-name>',
  scope: ['openid', 'profile']
};
```
Replace `<your-app-client-id>` and `<your-organization-name>` with your actual values from the Asgardeo console.

### 4. Update `App.jsx`
Replace the existing logic in `App.jsx` with the following code to enable login and logout functionality:

```javascript
import { useAuthContext } from '@asgardeo/auth-react';
import './App.css';

function App() {
  const { state, signIn, signOut } = useAuthContext();

  return (
    <div className="App">
      {state.isAuthenticated ? (
        <>
          <button onClick={() => signOut()}>Logout</button>
          <p>Welcome, {state.username}</p>
        </>
      ) : (
        <button onClick={() => signIn()}>Login</button>
      )}
    </div>
  );
}

export default App;
```

### 5. Start the Development Server
Run the following command to start the development server:
```bash
npm run dev
```
Access the application at `http://localhost:5173`.

### 6. Stop the Development Server
To stop the development server, use the following command:
```bash
pkill -f 'vite'
```

## Notes
- Ensure that the `clientID` and `baseUrl` values in `main.jsx` are correctly configured.
- Replace placeholders with actual values from your Asgardeo application.

Let me know if you need further assistance!

## Prompts Used

### 1. Initial Setup
- Remove current logic from the app and add login and logout using Asgardeo SDK as per the following guide - https://wso2.com/asgardeo/docs/quick-starts/react/

### 2. Keep Changes
- Keep

### 3. Run Development Server
- Run dev server

### 4. Stop Development Server
- Stop dev server

### 5. Remove Sensitive Information
- Remove sensitive info before add to a repo

### 6. Revert Sensitive Information
- No just change clientID and baseUrl as they were before

### 7. Create README
- Create a readme.md file with all instructions that I gave to you so far so that someone else can follow that

### 8. Add Prompts to README
- Add all prompts I used into the same readme

### 0. Create a React Vite Project
- Create a new React project using Vite with the following command:
```bash
npm create vite@latest asgardeo-react -- --template react
```
- Navigate to the project directory:
```bash
cd asgardeo-react
```
- Install dependencies:
```bash
npm install
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
