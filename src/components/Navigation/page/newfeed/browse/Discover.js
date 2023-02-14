import React, { useEffect, useState } from "react";
import Card from "../../../../ui/Card";

import useHttps from "../../../../hooks/useHttps";

const Discover = () => {
  const { sendRequest: fetchTasks } = useHttps();

  const httpsReq =
    "https://api.themoviedb.org/3/discover/movie?api_key=90564902bbc272fc9b74e023a801f674&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

  fetchTasks(httpsReq);
  console.log(fetchTasks);
  // return <Card items={movieList} />;
  return;
};

export default Discover;
