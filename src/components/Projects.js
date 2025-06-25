import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="fade-in py-10 max-w-3xl mx-auto">
      <h2 className="text-2xl mb-5 text-blue-800 font-bold">Key Projects</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 mb-6 fade-in">
        <img className="w-full rounded mb-4" src="https://source.unsplash.com/800x400/?microservices" alt="Microservices" />
        <h3 className="text-xl font-semibold mb-2">Fee Provisioning System – TIAA</h3>
        <p>Designed and delivered a microservices-based platform with Angular UI, deployed on OpenShift with CI/CD pipelines — resulting in faster and cheaper operations for a Fortune 500 client.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 mb-6 fade-in">
        <img className="w-full rounded mb-4" src="https://source.unsplash.com/800x400/?workflow" alt="Workflow Migration" />
        <h3 className="text-xl font-semibold mb-2">Unified Workflow Migration</h3>
        <p>Transformed a legacy Spring MVC app into a modular Angular frontend with RESTful integrations, increasing maintainability and user experience for 5000+ users.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 fade-in">
        <img className="w-full rounded mb-4" src="https://source.unsplash.com/800x400/?modernization" alt="Legacy Modernization" />
        <h3 className="text-xl font-semibold mb-2">ESAG – Legacy Modernization</h3>
        <p>Converted mainframe processes into modern Java/Angular architecture, enabling seamless integration and boosting performance significantly.</p>
      </div>
    </section>
  );
}
