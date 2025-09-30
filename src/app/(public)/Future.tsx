"use client";

export default function FutureEnhancements() {
  const features = [
    {
      title: "Engineer Profiles",
      description:
        "Showcase certifications (Rockwell, Siemens, UL508A), industries served, and portfolio samples.",
    },
    {
      title: "Project Postings with Bidding",
      description:
        "Employers can post projects and allow engineers/integrators to bid, ensuring competitive pricing.",
    },
    {
      title: "Compliance & Safety Checks",
      description:
        "Employers can verify OSHA 30, site safety, or UL compliance before onboarding.",
    },
    {
      title: "Integration with GitHub & CAD Portfolios",
      description:
        "Engineers can link GitHub repos and CAD drawings to strengthen profiles.",
    },
    {
      title: "Ratings & Reviews System",
      description:
        "Build trust by enabling employers and engineers to rate each other after projects.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto my-12 px-2">
      <h2 className="text-center text-3xl font-bold mb-8 text-blue-800 dark:text-blue-400">
        Future Enhancements
      </h2>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors duration-300">
        {features.map((feature, index) => (
          <div
            key={index}
            className="mb-6 hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-l-4 hover:border-blue-800 dark:hover:border-blue-400 hover:pl-2 transition-all duration-300 rounded"
          >
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
