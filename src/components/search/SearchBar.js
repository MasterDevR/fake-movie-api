import React, { useState } from "react";
import { Form } from "react-router-dom";
const SearchBar = () => {
  const [searchTitle, setSearchTitle] = useState("Search Movie");
  const searchTItleHandler = (e) => {
    setSearchTitle(e.target.value);
  };

  return (
    <div>
      <Form action={`/SearchMovie/:movieId`} method="post">
        <input
          type="text"
          id="searchBar"
          placeholder={searchTitle}
          onChange={searchTItleHandler}
          name="searchedTitle"
        />
      </Form>
    </div>
  );
};

export default SearchBar;
