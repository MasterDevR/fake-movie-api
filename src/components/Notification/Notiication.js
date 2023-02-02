import React from "react";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
const Notiication = () => {
  return (
    <div>
      <Link to="/">
        <FiMail id="icon" />
      </Link>
    </div>
  );
};

export default Notiication;
