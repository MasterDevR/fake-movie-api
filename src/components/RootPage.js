import React from "react";
import Navigation from "./Navigation/Navigation";
import SearchBar from "./search/SearchBar";

import classes from "./RootPage.module.css";
import UserNotification from "./Notification/UserNotification";
const RootPage = () => {
  return (
    <div className={classes.rootPageWrapper}>
      <Navigation />
      <SearchBar />
      <UserNotification />
    </div>
  );
};

export default RootPage;
