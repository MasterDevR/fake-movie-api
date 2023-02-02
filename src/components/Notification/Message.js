import React from "react";
import { FiMessageSquare } from "react-icons/fi";

import { Link } from "react-router-dom";

function Message() {
  return (
    <div>
      <Link to="/">
        <FiMessageSquare id="icon" />
      </Link>
    </div>
  );
}

export default Message;
