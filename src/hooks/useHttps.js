import React, { useCallback } from "react";
import axios from "axios";

const useHttps = () => {
  const sendRequest = useCallback(async (requestConfig) => {
    axios
      .get(requestConfig)
      .then((res) => {
        return res.data.results;
      })
      .catch((err) => {
        return console.log(err);
      });
  }, []);

  return {
    sendRequest,
  };
};

export default useHttps;
