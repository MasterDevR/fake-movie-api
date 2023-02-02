import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./components/RootPage";
import "./App.css";
import Browse from "./components/Navigation/page/newfeed/Browse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "browse",
        element: <Browse />,
      },
      {
        path: "WatchList",
        element: <Browse />,
      },
      {
        path: "CommingSoon",
        element: <Browse />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div className="appWrapper">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
