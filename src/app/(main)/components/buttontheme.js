"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
export default function ButtonTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  return (
    <Button
      onClick={toggleTheme}
      className="px-4 cursor-pointer z-50 bg-black/20 py-2 m-4 rounded w-fit fixed top-0 right-0  hover:bg-transparent  text-gray-800 dark:text-gray-200"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </Button>
  );
}
