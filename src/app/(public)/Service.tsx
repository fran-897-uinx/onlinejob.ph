import { Building2, Search, Laptop, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Building2 className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: "For Employers",
      desc: "Post automation projects, review engineer certifications, manage bids.",
    },
    {
      icon: <Search className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: "Job Search",
      desc: "Browse by PLC brand, industry (pharma, water, food, automotive).",
    },
    {
      icon: <Laptop className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: "Project Tools",
      desc: "Track milestones, upload electrical drawings, share PLC code securely.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: "Verified Professionals",
      desc: "All engineers screened for certifications, references, and compliance.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-100">
          Our <span className="text-gray-600 dark:text-gray-400">Services</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition cursor-pointer hover:scale-105 hover:shadow-blue-800/30"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
