import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import classes from "./RootPage.module.css";

import Navigation from "./Navigation/Navigation";
import SearchBar from "./search/SearchBar";
import UserNotification from "./Notification/UserNotification";

const RootPage = () => {
  return (
    <Fragment>
      <div className={classes.rootPageWrapper}>
        <Navigation />
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
