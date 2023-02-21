import React from "react";
import Message from "./Message";
import Notiication from "./Notiication";
import UserAccount from "./UserAccount";
const UserNotification = () => {
  return (
    <div className="notificatioWrapper">
      <Message />
      <Notiication />
      <UserAccount />
    </div>
  );
};

export default UserNotification;
