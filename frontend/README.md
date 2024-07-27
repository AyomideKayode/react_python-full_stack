# My Besties 🚀

Welcome to **My Besties**, an interactive web application that showcases my journey of learning and implementing modern web development technologies. This project leverages **React** for building the user interface and **Chakra UI** for stylish and responsive components.

Credits to [Burakorkmez](https://www.youtube.com/watch?v=tWHXaSC2T_s) for an amazing crash course to test the waters.

## Project Overview

My Besties is designed to display a list of my friends, their roles, and brief descriptions about them. The frontend is built with Chakra UI, which provides a seamless and accessible experience while making the development process enjoyable and efficient.

## Features

- **_Dynamic User Interface_**: Built with React and Chakra UI, ensuring a responsive and visually appealing design.
- **_Add New Friends_**: Easily add new friends to the list with the help of a modal form.
- **_Edit and Delete Friends_**: Update or remove friends from the list with intuitive controls.
- **_Light/Dark Mode_**: Toggle between light and dark modes to suit your preference.

## Learning Experience

I'm thrilled to share my learning experience with Chakra UI. It's a fantastic UI library that made styling and theming my application a breeze. Here's what I loved about it:

- **_Ease of Use_**: Chakra UI's components are straightforward to use and customize, making the development process faster and more enjoyable.
- **_Responsive Design_**: The library provides responsive utilities out of the box, allowing me to create a design that works well on any device.
- **_Accessibility_**: Chakra UI emphasizes accessibility, ensuring that my application is usable by everyone.

## How to Run the Project

- Clone the Repository:

```bash
git clone https://github.com/AyomideKayode/react_python-full_stack.git
cd frontend
```

- Install Dependencies:

```bash
npm install
```

- Start the Development Server:

```bash
npm run dev
```

- Open Your Browser:

Navigate to _`http://localhost:3000`_ to see the application in action.

## Project Structure

- **_`src/App.jsx`_**: The main application component that sets up the layout and integrates other components.
- **_`src/main.jsx`_**: The entry point of the application, rendering the App component and wrapping it with ChakraProvider.
- **_`src/components/Navbar.jsx`_**: A responsive navigation bar with light/dark mode toggle and modal to create a new friend.
- **_`src/components/CreateUserModal.jsx`_**: A modal component for adding new friends with form fields.
- **_`src/components/UserGrid.jsx`_**: A grid layout to display the list of friends.
- **_`src/components/UserCard.jsx`_**: A card component to display individual friend details with edit and delete options.
- **_`src/components/EditModal.jsx`_**: A modal component for editing friend details.

## Deployment

To deploy the application and link it with the backend:

**_Build the Frontend_**:

```bash
cd frontend
npm run build
```

- This command generates a `dist` folder containing the optimized and minified static files (HTML, CSS, JS) for production. These files are essential for serving the React application as static assets.

**_Integrate with Backend_**:

Ensure the backend is set up to serve static files from the dist folder. In your app.py, add the following configuration:

- This setup ensures that Flask serves the static files from the dist folder, handling any frontend routes by sending back the index.html file for client-side routing.

**_Deploy on Render_**:

Host your Flask application on Render, ensuring the dist folder is correctly referenced in the deployment configuration.

## Acknowledgements

A big shoutout to [Burakorkmez](https://www.youtube.com/watch?v=tWHXaSC2T_s) and to the creators of Chakra UI for developing such an amazing library that enhances the development experience. I'm excited to continue exploring its capabilities and building more interactive features.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
