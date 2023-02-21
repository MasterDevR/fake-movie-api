import Popular from "./browse/Popular";
import Trending from "./browse/Trending";
import Discover from "./browse/Discover";

const Browse = () => {
  return (
    <div>
      <div className="DisplayWrapper">
        <h1>Trending</h1>
        <Trending />
      </div>
      <div className="DisplayWrapper">
        <h1>Popular</h1>
        <Popular />
      </div>{" "}
      <div className="DisplayWrapper">
        <h1>Discover</h1>
        <Discover />
      </div>
    </div>
  );
};

export default Browse;
