import React from "react";
import NewsFeed from "./page/newfeed/NewsFeed";
const Navigation = () => {
  return (
    <nav className="navigationWrapper">
      <span>
        Fake <span id="red"> Movie </span>
      </span>
      <div>
        <NewsFeed />
      </div>
    </nav>
  );
};

export default Navigation;
