import React from "react";
import HomePage from "./pages/HomePage";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import NavLayout from "./layouts/NavLayout";
import BooksPage from "./pages/BooksPage";
import AddBook from "./pages/AddBook";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext"; // Asegurarse de importar el AuthProvider

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFoundPage />} />
      {/* Ruta para la página de detalles del libro */}
      <Route path="/books/:id" element={<BookDetailPage />} /> {/* NUEVA RUTA PARA DETALLES DEL LIBRO */}
    </Route>
  )
);

const App = () => {
  return (
    <AuthProvider> {/* Envolver la aplicación con AuthProvider */}
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
