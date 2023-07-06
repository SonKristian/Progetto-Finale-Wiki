import { useState, useEffect } from "react";

export default function Switch() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="header__switch">
      <div className="header__switch--mode">
        <p id="switch__mode">Set Mode</p>
        <input
          type="checkbox"
          id="toggle"
          className="toggle--checkbox"
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
}
