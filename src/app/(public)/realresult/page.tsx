// components/Testimonial.tsx
"use client";

import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

interface RealResult {
  content: string;
  position: string;
}
export default function RealResult() {
  const RealResults: RealResult[] = [
    {
      content:
        "“PLC Hire connected us with a Siemens programmer for a water treatment project — seamless onboarding.”",
      position: "Employer",
    },
    {
      content:
        " I found consistent contract work with top integrators through PLC  Hire.”",
      position: "Automation Engineer",
    },
    {
      content:
        "We scaled our controls team quickly during a large commissioning project thanks to PLC Hire's talent pool.”",
      position: "System Integrator",
    },
    {
      content:
        "Finding UL508A panel builders used to be a bottleneck — PLC Hire made the process effortless.",
      position: "Panel Shop Owner",
    },
    {
      content:
        "I was placed on a robotics commissioning project within a week. The opportunities keep coming.",
      position: "Commissioning Engineer",
    },
    {
      content: "",
      position: "",
    },
    {
      content: "",
      position: "",
    },
    {
      content: "",
      position: "",
    },
  ];

  return (
    <>
    <Navbar/>
    <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-5 text-gray-600 dark:text-gray-100">
          What people are saying
        </h2>
        <div className="flex justify-center items-center mb-18">
          <span className="border-2 border-green-400 w-16"></span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {RealResults.map((result, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {result.content}
              </p>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                {result.position}
              </h4>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-20">
          <button className="border border-blue-800 text-blue-900 dark:text-blue-300 transition uppercase rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer p-3.5 px-12 font-bold">
            SEE MORE REAL RESULT
          </button>
        </div> */}
      </div>
      </section>
      <Footer/>
      </>
  );
}
