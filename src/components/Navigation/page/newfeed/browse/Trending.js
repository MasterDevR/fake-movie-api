import Card from "../../../../ui/Card";
import UseHttps from "../../../../../hooks/useHttps";
import Loader from "../../../../Loader";

const Trending = () => {
  const { movieData, isLoading, error } = UseHttps(
    " https://api.themoviedb.org/3/trending/all/week?api_key=90564902bbc272fc9b74e023a801f674"
  );

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    console.log(error);
  }
  return <div>{movieData !== undefined && <Card items={movieData} />}</div>;
};

export default Trending;
