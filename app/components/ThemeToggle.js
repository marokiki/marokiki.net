"use client";

import { useState, useEffect } from 'react'
import { useTheme } from "next-themes";

export const ThemeToggle = (props) => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }

  return (
    <div className="flex flex-row space-x-1">
      <button
        onClick={() => {
          setTheme("light");
        }}
        className="py-1 px-2 border-2 rounded-md"
      >
        light
      </button>
      <button
        onClick={() => {
          setTheme("dark");
        }}
        className="py-1 px-2 border-2 rounded-md"
      >
        dark
      </button>
      <button
        onClick={() => {
          setTheme("system");
        }}
        className="py-1 px-2 border-2 rounded-md"
      >
        system
      </button>
    </div>
  );
};
