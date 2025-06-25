// Simple theme toggle for developer portfolio
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// typed text effect for hero section
const typedStrings = ['Solutions Architect', 'Full Stack Developer', 'Cloud Expert'];
let typedIndex = 0;
let charIndex = 0;
const typedSpeed = 120;
const eraseSpeed = 80;
const nextDelay = 2000;

function typeText() {
  const typedElem = document.getElementById('typed-text');
  if (!typedElem) return;
  if (charIndex < typedStrings[typedIndex].length) {
    typedElem.textContent += typedStrings[typedIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typedSpeed);
  } else {
    setTimeout(eraseText, nextDelay);
  }
}

function eraseText() {
  const typedElem = document.getElementById('typed-text');
  if (!typedElem) return;
  if (charIndex > 0) {
    typedElem.textContent = typedStrings[typedIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, eraseSpeed);
  } else {
    typedIndex = (typedIndex + 1) % typedStrings.length;
    setTimeout(typeText, typedSpeed);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('typed-text')) {
    setTimeout(typeText, nextDelay);
  }

  const fadeElems = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeElems.forEach(el => observer.observe(el));
});

