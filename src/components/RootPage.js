import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import SearchBar from "./search/SearchBar";
import UserNotification from "./Notification/UserNotification";
import UserAccount from "./Notification/UserAccount";
const RootPage = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <Fragment>
      <div>
        <Navigation />
      </div>

      <div className="rootPageWrapper">
        <SearchBar />
        {isLogIn ? (
          <UserNotification />
        ) : (
          <div className="notificatioWrapper">
            <UserAccount />
          </div>
        )}
      </div>
      <div className="Outlet">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default RootPage;
