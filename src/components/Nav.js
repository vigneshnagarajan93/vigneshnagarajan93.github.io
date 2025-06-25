import React from 'react';

export default function Nav() {
  return (
    <nav className="bg-blue-800 text-white py-2 text-center sticky top-0 z-10">
      <a className="mx-3 font-semibold" href="#about">About</a>
      <a className="mx-3 font-semibold" href="#skills">Skills</a>
      <a className="mx-3 font-semibold" href="#projects">Projects</a>
      <a className="mx-3 font-semibold" href="#blog">Blog</a>
      <a className="mx-3 font-semibold" href="#contact">Contact</a>
    </nav>
  );
}
