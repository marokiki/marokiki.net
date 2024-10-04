"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check the local storage for the saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div style={styles.toggleContainer}>
      <button onClick={toggleTheme} style={styles.button}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

const styles = {
  toggleContainer: {
    position: "absolute",
    top: "10px",
    right: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};
