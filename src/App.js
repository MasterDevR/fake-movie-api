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
import WatchList from "./components/Navigation/page/newfeed/WatchList";

import CommingSoon from "./components/Navigation/page/newfeed/CommingSoon";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/browse",
        element: <Browse />,
        children: [
          {
            path: ":type/:movieId/:title/:date",
            element: <Browse />,
          },
        ],
      },
      {
        path: "WatchList",
        element: <WatchList />,
      },
      {
        path: "CommingSoon",
        element: <CommingSoon />,
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
