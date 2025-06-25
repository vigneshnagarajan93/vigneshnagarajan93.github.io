import React from 'react';
import Layout from '../components/Layout';
import ThemeToggle from '../components/ThemeToggle';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Layout>
      <ThemeToggle />
      <Hero />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </Layout>
  );
}
