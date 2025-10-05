import { Briefcase, Clock, Shield, Users } from "lucide-react";

export default function Benefits() {
  const items = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Specialized Talent Pool",
      desc: "Access certified PLC programmers, SCADA developers, and control engineers worldwide.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Verified Experience",
      desc: "Engineers and integrators are vetted for certifications (UL508A, Siemens, Rockwell, etc.).",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Flexible Engagement",
      desc: "Hire for projects, commissioning, or full-time roles.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Secure & Compliant",
      desc: "Ensure safe collaboration and compliance with industry standards.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-gray-100">
          Why Choose{" "}
          <span className="text-blue-900 dark:text-blue-800">
            PLC
            <span className="border-l-3 mx-2 pl-2">Hire</span>
          </span>
          ?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md 
                         transition transform hover:scale-105 hover:shadow-blue-400 dark:hover:shadow-blue-600 
                         cursor-pointer"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
