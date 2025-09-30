"use client";
import { useState } from "react";
import Link from "next/link";

export default function CommonTalents() {
  const commonTalents = [
    "PLC Programmers (Siemens, Allen-Bradley, Codesys)",
    "HIMI, SCADA Developers (Ignition, WonderWave, WinCC)",
    "UL508A Panel Builders",
    "Control System Integrators",
    "Robotics & Motion Control Engineers",
    "Electrical Designers (AutoCAD Electrical, EPLAN)",
    "Commissioning Engineers",
    "Industrial Networking Specialists",
    "Validation Engineers (Pharma/FDA/ISO)",
    "Instrumentation & Field Technicians",
    "DCS Engineers (Fanuc, ABB, KUKA, UR)",
    "Data Integration Engineers (OPC-UA, MQTT, REST APIs)",
    "Safety System Engineers (SIL, TUV-certified)",
  ];

  const toSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

  const [visibleCount, setVisibleCount] = useState(32);

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-gray-100 mb-7 text-center">
          Common Talent Searches
        </h1>

        <div className="flex justify-center items-center mb-10">
          <span className="border-2 border-green-400 w-16"></span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {commonTalents.slice(0, visibleCount).map((talent, idx) => (
            <Link
              key={idx}
              href={`/talent/${toSlug(talent)}`}
              className="block px-4 py-3 text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition font-medium"
            >
              {talent}
            </Link>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-20">
          <Link
            href="/talents"
            className="border border-blue-800 text-blue-900 dark:text-blue-300 transition uppercase rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer p-3.5 px-12 font-bold inline-block"
          >
            SEE MORE SKILLS
          </Link>
        </div>
      </div>
    </section>
  );
}
