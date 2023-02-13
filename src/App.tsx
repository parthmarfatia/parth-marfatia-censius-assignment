import React, { useState } from "react";
import Navigation from "./Components/Navigation";
import SideBar from "./Components/SideBar";
import TeamMembers from "./Pages/TeamMembers";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div
      className="app--container"
      style={{ backgroundColor: isDarkMode ? "#111827" : "#F9FAFB" }}
    >
      <SideBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="page--container">
        <Navigation isDarkMode={isDarkMode} />
        <TeamMembers isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;
