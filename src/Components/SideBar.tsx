import React from "react";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faBox,
  faEnvelope,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = (props: { isDarkMode: Boolean; setIsDarkMode: Function }) => {
  const { isDarkMode, setIsDarkMode } = props;
  return (
    <aside className="sidebar--container">
      <div className="sidebar--links sidebar--link--active">
        <FontAwesomeIcon icon={faPeopleGroup} className="sidebar--icon" />
        Team Members
      </div>
      <div className="sidebar--links">
        <FontAwesomeIcon icon={faBox} className="sidebar--icon" />
        Products
      </div>
      <div className="sidebar--links">
        <FontAwesomeIcon icon={faEnvelope} className="sidebar--icon" />
        Inbox
      </div>
      <div
        className={
          !isDarkMode ? "sidebar--mode" : "sidebar--mode sidebar--link--active"
        }
        onClick={() => setIsDarkMode((prevMode: boolean) => !prevMode)}
      >
        {!isDarkMode ? (
          <FontAwesomeIcon icon={faSun} className="sidebar--icon" />
        ) : (
          <FontAwesomeIcon icon={faMoon} className="sidebar--icon" />
        )}
        {!isDarkMode ? "Light Mode" : "Dark Mode"}
      </div>
    </aside>
  );
};

export default SideBar;
