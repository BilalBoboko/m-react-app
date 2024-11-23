import React, { useState, useEffect } from "react";
import moon from "../../img/icons/moon.svg";
import sun from "../../img/icons/sun.svg";
import "./style.css";

const BtnDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <div>
      <button className="dark-mode-btn" onClick={toggleTheme}>
        <img src={sun} alt="Light mode" className="icon sun-icon" />
        <span className={`slider ${isDarkMode ? "slider-dark" : "slider-light"}`}>
          <img src={isDarkMode ? moon : sun} alt="Active mode" className="slider-icon" />
        </span>
        <img src={moon} alt="Dark mode" className="icon moon-icon" />
      </button>
    </div>
  );
};

export default BtnDarkMode;
