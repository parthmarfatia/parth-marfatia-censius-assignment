import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navigation = (props: {
  isDarkMode: boolean;
  query: string;
  setQuery: Function;
}) => {
  const { isDarkMode, query, setQuery } = props;
  return (
    <nav className="nav--container">
      <h2
        className="nav--title"
        style={{ color: isDarkMode ? "#F3F4F6" : "#1f2937" }}
      >
        Team Members
      </h2>
      <input
        placeholder="Search..."
        className="nav--searchbar"
        style={{
          backgroundColor: isDarkMode ? "#1F2937" : "#f9fafb",
          color: isDarkMode ? "#F3F4F6" : "#1F2937",
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query === "" ? (
        <FontAwesomeIcon icon={faSearch} className="nav--icon" />
      ) : (
        <FontAwesomeIcon
          icon={faXmark}
          className="nav--icon"
          onClick={() => setQuery("")}
        />
      )}
    </nav>
  );
};

export default Navigation;
