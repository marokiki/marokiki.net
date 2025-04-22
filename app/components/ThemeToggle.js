"use client";

import { useThemeHandler } from "../hooks/useThemeHandler";

export const ThemeToggle = () => {
  const { mounted, currentTheme, toggleTheme } = useThemeHandler();

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border-2 flex items-center justify-center ml-2 mt-1"
      aria-label="Toggle Theme"
    >
      {currentTheme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0112.002 21c-5.385 0-9.75-4.365-9.75-9.75a9.718 9.718 0 016.002-9.002 7.5 7.5 0 1013.498 12.754z"
          />
        </svg>
      )}
    </button>
  );
};
