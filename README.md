#Mindery Kids Landing Page
This is a responsive and creative landing page for "Mindery Kids," a fictional mindfulness and meditation platform for children. The project was developed as a modern frontend application using React and Tailwind CSS.

The design is based on a reference screenshot and includes smooth animations, a fully responsive layout, and an interactive pop-up form.

Key Features
Responsive Design: The layout is optimized for all devices, from mobile phones to large desktops.

Interactive Elements: Includes hover effects, subtle animations, and an FAQ section with a collapsible accordion.

Pop-up Form: A modal form appears when the "Start Free Trial" button is clicked, collecting user information.

Component-Based Architecture: The application is built with reusable React components for scalability and maintainability.

Modern Tech Stack: Leverages Vite as a build tool, React for the user interface, and Tailwind CSS for rapid styling.

How to Run the Project Locally
To get a local copy up and running, follow these simple steps.

Clone the Repository

git clone [https://github.com/your-username/landing_page.git](https://github.com/your-username/landing_page.git)
cd landing_page

Install Dependencies

npm install

This command installs all the necessary packages, including React, Tailwind CSS, and other development dependencies.

Run the Development Server

npm run dev

Your application will be live at http://localhost:5173 (or a similar address) and will automatically update as you make changes to the code.

Deployment
This project is configured to be deployed on GitHub Pages. Once the project is pushed to the main branch, you can deploy it by running:

npm run deploy

This command will create an optimized production build and push it to the gh-pages branch, making your live URL available at https://your-username.github.io/landing_page.

Technologies Used
Vite: Fast and lightweight build tool.

React: JavaScript library for building user interfaces.

Tailwind CSS: Utility-first CSS framework for styling.

Lucide React: Icon library for the application


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
