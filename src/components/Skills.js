import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="fade-in py-10 max-w-3xl mx-auto">
      <h2 className="text-2xl mb-5 text-blue-800 font-bold">Skills &amp; Technologies</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 fade-in">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Languages &amp; Frameworks:</strong> Java, Spring Boot, Angular, Kotlin</li>
          <li><strong>Cloud &amp; DevOps:</strong> AWS, OpenShift, Jenkins, GitHub Actions</li>
          <li><strong>Cybersecurity Tools:</strong> Nmap, Burp Suite, Metasploit</li>
          <li><strong>Database &amp; Integration:</strong> Oracle, PostgreSQL, Kong Gateway</li>
        </ul>
      </div>
    </section>
  );
}
