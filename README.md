## 👋 EComposer - Vishal Kumawat (AI2680)

#### 🔴 Live At - https://ecomposer-ai2680.vercel.app/

## 📸 Project Screenshots

### 1. Blog Listing Page

![screencapture-ecomposer-ai2680-vercel-app-2024-09-30-18_13_42](https://github.com/user-attachments/assets/37e5ecee-12a1-4d9d-a45e-9fb9e0788aae)

### 2. Contact Us Page

![screencapture-ecomposer-ai2680-vercel-app-contact-2024-09-30-18_14_13](https://github.com/user-attachments/assets/6028057f-719f-47fe-a5ca-8279c15bc09b)

# Project Documentaion

## 1. Components Listing <br />

E-Composer is a web application that provides users 2 pages <br />

1. Blog Listing Page <br />
2. Contact Us Page <br />

The Blog Listing Page is having following Components <br />

1. Hero Section <br />
2. News Letter <br />
3. Fashion Section <br />
4. Spotlight Section <br />
5. Lifestyle Section <br />

The Contact Us Page is having following Components <br />

1. Hero Cards <br />
2. Help Desk <br />
3. Popular Asked Questions <br />
4. Any other questions <br />
5. Footer <br />

## 2. Main Features

### 2.1 PWA ( Progressive Web App )

- PWA is a web application that can be installed on the user's device and run offline.
- It provides a native app-like experience to the user, with features such as push notifications, offline access, and app-like navigation.
- vite-plugin-pwa is used for PWA and assets-generator for icons.

```
{
  "vite-plugin-pwa": "^0.20.5",
  "@vite-pwa/assets-generator": "^0.2.6",
}
```

### 2.2 TailwindCSS + Responsive Design

- TailwindCSS is a utility-first CSS framework that allows you to build custom designs quickly and easily.
- It provides a set of pre-built classes that can be used to style HTML elements, making it easy to create responsive designs.
- TailwindCSS is used for styling and responsive design.

```
{
  "tailwindcss": "^3.4.13",
  "autoprefixer": "^10.4.20",
  "postcss": "^8.4.47",
}
```

### 2.3 TypeScript (TS)

- TypeScript is a superset of JavaScript that adds optional static typing to the language. It is a popular choice for building large-scale applications with JavaScript.
- TypeScript provides a way to catch errors early and improve code quality at compile time.
- Industry standard of TypeScript is used for the project.

```
{
  "typescript": "^5.5.3",
  "typescript-eslint": "^8.0.1",
}
```

### 2.4 Error Boundary (React Error Boundary)

- Error Boundary is a React component that catches errors in its child components and renders a fallback UI.
- It provides a way to handle errors gracefully and prevent them from crashing the entire application.
- Individual components are wrapped with the Error Boundary component to handle errors gracefully.

```
{
  "react-error-boundary": "^4.0.13",
}
```

### 2.5 React Router

- React Router is a popular library for handling routing in React applications.
- It provides a way to define routes and navigate between them, making it easy to create complex navigation structures.

```
{
  "react-router-dom": "^6.26.2",
}
```

### 2.6 HeroSection Annimations

- useAnnimations is a custom hook that triggers the animation on the component.
- Annimations are triggred on components mounting and unmounting , for both Blog Listing Page and Contact Us Page.
- After triggering the animation, the component is rendered with the animation using the transition-transform property from TailwindCSS.

<br/>
<br/>

## 3. Approaches Used while Development

### 3.1 Context API

- Context API is a feature in React that allows you to share data between components without passing props down the tree.
- Not used Redux or any other state management library because the data is static and not dynamic.
- For synonymous data handling, Context API is a good choice , and also a inbuild feature in React.
- Used in Blog Listing Page and Contact Us Page.
- Blog Listing Page - Fetching the data from BlogContext and rendering the component.
- Contact Us Page - Fetching the data from ContactContext and rendering the component.

### 3.2 Custom Hooks

- Custom Hooks are functions that let you reuse stateful logic between components.
- Used in Blog Listing Page.
- Blog Listing Page - Fetching the data from useFetchBlogData hook and rendering the component.
- useFetchBlogData hook - Filters the data based on the display and banner type.
- useAnnimation hook - triggers the animation on the component.
- useFetchBlogData , useAnnimation hook - Fetching the data from the API and rendering the component.

### 3.3 Routes HOC (Higher Order Component)

- Routes HOC is a higher-order component that allows you to define routes and navigate between them.
- Used in Blog Listing Page and Contact Us Page.
- Two types - Public HOC and Private HOC.
- Public HOC - Checks if the user is logged in and on the auth route, redirects to home, else renders children.
- Private HOC - Checks if the user is logged in and on the auth route, renders children, else redirects to login.
- Assumes that user is logged in ( isUser = true ).

### 3.5 Memorization Techniques

- Memorization Techniques are techniques used to improve the performance of a system by reducing the number of operations required to perform a task.
- useMemo is used in useFetchBlogData hook to memoize the data to avoid unnecessary re-renders.
- React.Memo is used in some components which are only dependent on props to memoize the data to avoid unnecessary re-renders.

### 3.6 Clean Code + Best Practices

- Clean Code is a set of principles and guidelines for writing clean and maintainable code.
- Code is break down into small functions and components for maintainability and reusability.
- Camel Case Naming Convention - Used for variable, function.
- Capital Letters for mock data variables.
- Pascal Case Naming Convention - Used for type, interface.
- Comment is also added to eash function and component for better understanding.

<br/>
<br/>

# Installation Guide

### 1. Clone this Repo

```
git clone https://github.com/vishal-kumawat-appinventiv/e-composer-AI2680
```

### 2. Install Dependencies

```
npm install
```

### 3. Run the App

```
npm run dev
```

### 4. Build Command

```
npm run build
```

### 5. Preview Command

```
npm run preview
```

<br />
<br />

# Links

- TailwindCSS - https://tailwindcss.com/
- Vite - https://vitejs.dev/
- TypeScript - https://www.typescriptlang.org/
- React - https://react.dev/
- React Router - https://reactrouter.com/
- React Error Boundary - https://www.npmjs.com/package/react-error-boundary
- PWA Docs - https://www.saurabhmisra.dev/setup-react-pwa-using-vite/
- ESLint - https://eslint.org/
- Prettier - https://prettier.io/

<br />
<br />

## Thanku for Reading 😎

- If you liked this project, please give it a star ⭐
- If you have any suggestions or improvements, please feel free to create an issue or pull request.
