import React from "react";
import Message from "./Message";
import Notiication from "./Notiication";
import UserAccount from "./UserAccount";
import classes from "./UserNotiication.module.css";
const UserNotification = () => {
  return (
    <div className={classes.notificatioWrapper}>
      <Message />
      <Notiication />
      <UserAccount />
    </div>
  );
};

export default UserNotification;
