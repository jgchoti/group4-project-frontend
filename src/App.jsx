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
import BookDetailPage from "./pages/BookDetailPage";
import EditBook from "./pages/EditBook";

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
      <Route path="/books/:id" element={<BookDetailPage />} />
      <Route path="/edit/:id" element={<EditBook />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
