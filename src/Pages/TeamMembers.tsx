import React, { useEffect, useState } from "react";
import data from "../Data/data.json";
import Card from "../Components/Card";

import "./TeamMembers.css";

const TeamMembers = (props: { isDarkMode: Boolean; query: string }) => {
  const { isDarkMode, query } = props;
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData((prevData) => {
      return data.filter((val) => {
        const fullName = `${val.first} ${val.last}`;
        return fullName.toLowerCase().includes(query.toLowerCase());
      });
    });
  }, [query]);

  const displayData = filteredData.map((val) => (
    <Card key={val.id} val={val} isDarkMode={isDarkMode} />
  ));

  return (
    <div
      className="team--container"
      style={{ backgroundColor: isDarkMode ? "#1F2937" : "#f3f4f6" }}
    >
      {displayData}
    </div>
  );
};

export default TeamMembers;
