import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Result from "./components/Result";
import ResultDetails from "./components/ResultDetails";
import RootLayout from "./components/RootLayout/RootLayout";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },//default route if parent route is currently active
      { path: "/result", element: <Result /> },
      { path: "/result/:id", element: <ResultDetails /> }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
