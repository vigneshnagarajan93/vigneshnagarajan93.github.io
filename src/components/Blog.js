import React from 'react';

export default function Blog() {
  return (
    <section id="blog" className="fade-in py-10 max-w-3xl mx-auto">
      <h2 className="text-2xl mb-5 text-blue-800 font-bold">Technical Blog</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 mb-6 fade-in">
        <h3 className="text-xl font-semibold mb-2">\uD83D\uDEE0 Modernizing Monoliths to Microservices</h3>
        <p>Learn my real-world approach to breaking down monoliths and migrating to Spring Boot-based microservices on OpenShift.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 fade-in">
        <h3 className="text-xl font-semibold mb-2">\uD83D\uDD10 Securing APIs with Kong and PingFed</h3>
        <p>Understand API gateway design patterns and security best practices from my latest enterprise integration work.</p>
      </div>
    </section>
  );
}
