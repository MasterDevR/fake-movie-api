import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./components/RootPage";
import "./App.css";
import Browse from "./components/Navigation/page/newfeed/Browse";
import SearchMovie, {
  action as submitTitleAction,
} from "./components/search/SearchMovie";
import ErrorPage from "./components/Navigation/page/error/ErrorPage";

// store
import Store from "./store/store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/browse",
        element: <Browse />,
        children: [
          {
            path: ":movieId/:title/:date",
            element: <Browse />,
          },
        ],
      },
      {
        path: "WatchList",
        element: <Browse />,
      },
      {
        path: "CommingSoon",
        element: <Browse />,
      },
      {
        path: "SearchMovie/:movieId",
        element: <SearchMovie />,
        action: submitTitleAction,
      },
    ],
  },
]);
const App = () => {
  return (
    <Store>
      <div className="appWrapper">
        <RouterProvider router={router} />
      </div>
    </Store>
  );
};

export default App;

// 90564902bbc272fc9b74e023a801f674
