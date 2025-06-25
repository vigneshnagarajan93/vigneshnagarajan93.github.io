import React from 'react';

export default function About() {
  return (
    <section id="about" className="fade-in py-10 max-w-3xl mx-auto">
      <h2 className="text-2xl mb-5 text-blue-800 font-bold">About Me</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 fade-in">
        <p>
          With over 9 years of industry experience, I specialize in delivering scalable,
          secure, and high-performance enterprise applications. As a Technical Solutions
          Architect, I lead teams through complex transformations — from monolith to
          microservices, legacy to cloud-native. I thrive on building value-driven,
          modern platforms for the financial and retirement sectors.
        </p>
      </div>
    </section>
  );
}
