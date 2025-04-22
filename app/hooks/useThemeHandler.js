"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const useThemeHandler = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = theme === "system" ? systemTheme : theme;

    const toggleTheme = () => {
        setTheme(currentTheme === "dark" ? "light" : "dark");
    };

    return { mounted, currentTheme, toggleTheme };
};
