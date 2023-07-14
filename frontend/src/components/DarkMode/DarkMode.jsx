import { useState } from "react";
import "./css/dark.css";

const DarkModeToggle = () => {
  const [isDark, setisDark] = useState(false);

  const toggleDarkMode = () => {
    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      bodyElement.classList.toggle("dark-mode");
    }

    const navChildElement = document.querySelector(".nav-child");
    if (navChildElement) {
      navChildElement.classList.toggle("dark-mode");
    }

    const dropdownElement = document.querySelector(".dropdown");
    if (dropdownElement) {
      dropdownElement.classList.toggle("dark-mode");
    }

    const headerTopElement = document.querySelector(".header-top");
    if (headerTopElement) {
      headerTopElement.classList.toggle("dark-mode");
    }

    const footerTopElement = document.querySelector("#footer-top");
    if (footerTopElement) {
      footerTopElement.classList.toggle("dark-mode");
    }

    const footerDownElement = document.querySelector("#footer-down");
    if (footerDownElement) {
      footerDownElement.classList.toggle("dark-mode");
    }

    const buttonElement = document.querySelector(".btn-action");
    if (buttonElement) {
      buttonElement.classList.toggle("dark-mode");
    }

    const paginationElement = document.querySelector(".container-pag");
    if (paginationElement) {
      paginationElement.classList.toggle("dark-mode");
    }

    const logoElement = document.querySelector(".logo");
    if (logoElement) {
      logoElement.classList.toggle("dark-mode");
    }

    setisDark(true);
  };

  return (
    <div
      id="dark-btn"
      className={`btn-action ${isDark ? "active" : ""}`}
      onClick={toggleDarkMode}
    >
      {isDark ? "Light Mode" : "Dark Mode"}
      {/* {console.log("from Dark" + isDark)} */}
    </div>
  );
};

export default DarkModeToggle;
