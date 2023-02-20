import { NavLink } from "react-router-dom";
import { FiAirplay, FiCoffee, FiHeart, FiBookmark } from "react-icons/fi";

const NewsFeed = () => {
  let activeStyle = {
    color: "white",
  };

  return (
    <nav className="NewsFeedWrapper">
      <NavLink
        to="/browse"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        id="NavTitle"
      >
        <FiAirplay id="icon" />
        Browse
      </NavLink>
      <NavLink
        to="/WatchList"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        id="NavTitle"
      >
        <FiHeart id="icon" />
        WatchList
      </NavLink>{" "}
      <NavLink
        to="/BookeMarked"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        id="NavTitle"
      >
        <FiBookmark id="icon" />
        BookMark
      </NavLink>
      <NavLink
        to="/CommingSoon"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        id="NavTitle"
      >
        <FiCoffee id="icon" />
        Comming soon
      </NavLink>
    </nav>
  );
};

export default NewsFeed;
