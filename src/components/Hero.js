import React, { useState, useEffect } from 'react';

const strings = ['Solutions Architect', 'Full Stack Developer', 'Cloud Expert'];
const TYPED_SPEED = 120;
const ERASE_SPEED = 80;
const DELAY = 2000;

export default function Hero() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!erasing) {
        if (char < strings[index].length) {
          setText(prev => prev + strings[index][char]);
          setChar(char + 1);
        } else {
          setErasing(true);
          setTimeout(() => {}, DELAY);
        }
      } else {
        if (char > 0) {
          setText(strings[index].substring(0, char - 1));
          setChar(char - 1);
        } else {
          setIndex((index + 1) % strings.length);
          setErasing(false);
        }
      }
    }, erasing ? ERASE_SPEED : TYPED_SPEED);
    return () => clearTimeout(timeout);
  }, [text, index, char, erasing]);

  return (
    <header className="text-center py-20 bg-cover bg-center fade-in visible" style={{backgroundImage: "url('https://source.unsplash.com/1600x400/?technology,cloud')"}}>
      <img className="w-36 h-36 rounded-full border-4 border-white mx-auto mb-5 object-cover" src="https://source.unsplash.com/200x200/?portrait" alt="Profile" />
      <h1 className="text-3xl font-bold text-white">Vignesh Nagarajan</h1>
      <p className="text-lg text-white">I am <span>{text}</span></p>
    </header>
  );
}
