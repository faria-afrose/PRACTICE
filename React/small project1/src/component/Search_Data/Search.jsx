import React, { useEffect, useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const handelSearch = (e) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    props.onSearchCountry(searchValue);
  }, [searchValue]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search Country"
        value={searchValue}
        onChange={handelSearch}
      />
    </div>
  );
};
export default Search;
