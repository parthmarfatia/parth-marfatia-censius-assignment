import React from "react";

const Card = (props: {
  val: {
    id: Number;
    first: String;
    last: String;
    designation: String;
  };
  isDarkMode: Boolean;
}) => {
  const { id, first, last, designation } = props.val;
  const { isDarkMode } = props;
  return (
    <div
      className="card--container"
      style={{ backgroundColor: isDarkMode ? "#1E3A8A" : "#EFF6FF" }}
    >
      <div className="card--image">{first[0] + last[0]}</div>
      <h3
        className="card--name"
        style={{ color: isDarkMode ? "#F3F4F6" : "#111827" }}
      >
        {first + " " + last}
      </h3>
      <p
        className="card--occupation"
        style={{ color: isDarkMode ? "#D1D5DB" : "#6B7280" }}
      >
        {designation}
      </p>
    </div>
  );
};

export default Card;
