import { useState } from "react";
import "./css/dark.css";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
    document.body.classList.toggle("dark-mode");
    //aggiungere o rimuovere la classe CSS "dark-mode"
  };

  return (
    <div className={`dark-mode-toggle ${isDarkMode ? "active" : ""}`} onClick={toggleDarkMode}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </div>
  );
};

export default DarkModeToggle;

