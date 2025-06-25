import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <button className="fixed top-5 right-5 bg-blue-800 text-white px-3 py-2 rounded" onClick={() => setDarkMode(!darkMode)}>
      \uD83C\uDF19 Toggle Theme
    </button>
  );
}
