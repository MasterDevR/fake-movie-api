import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import SearchBar from "./search/SearchBar";
import UserNotification from "./Notification/UserNotification";

const RootPage = () => {
  return (
    <Fragment>
      <div>
        <Navigation />
      </div>

      <div className="rootPageWrapper">
        <SearchBar />
        <UserNotification />
      </div>
      <div className="Outlet">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default RootPage;
