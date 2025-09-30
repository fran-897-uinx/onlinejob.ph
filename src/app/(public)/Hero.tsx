"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-200 py-4 border-b-2 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-12 px-2 pt-4">
          The Job Board for Control System
          <br />
          Engineers & Automation Professionals
        </h1>

        {/* Search Options */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-2xl mx-auto p-5 px-20">
          {/* Search Resumes */}
          <div className="grid">
            <h1 className="text-2xl text-center font-semibold text-gray-600 dark:text-gray-300 mb-2 md:text-start">
              Looking for <span className="text-blue-700 dark:text-blue-400">Engineers</span>?
            </h1>
            <span className="flex items-center justify-center gap-3 px-2 py-3 w-full bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-300 rounded-3xl shadow transition font-semibold text-lg md:px-4">
              <Search className="w-6 h-6" />
              <input
                type="text"
                className="outline-none text-gray-700 dark:text-gray-200 dark:bg-gray-800"
                placeholder="Find Engineers"
              />
              <button className="bg-blue-950 dark:bg-blue-700 rounded-2xl px-5 py-1.5 text-xl text-white text-center hover:bg-blue-600 dark:hover:bg-blue-500 cursor-pointer">
                Search
              </button>
            </span>
          </div>
 
          {/* Search Jobs */}
          <div className="grid pl-3">
            <h1 className="text-2xl text-center font-semibold text-gray-600 dark:text-gray-300 mb-2 md:text-start">
              Looking for <span className="text-green-500 dark:text-green-400">Projects</span>?
            </h1>
            <span className="flex items-center justify-center gap-3 px-2 md:px-4 py-3 bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-300 rounded-3xl shadow transition font-semibold text-lg">
              <Search className="w-6 h-6" />
              <input
                type="text"
                className="outline-none text-gray-700 dark:text-gray-200 dark:bg-gray-800"
                placeholder="Find Projects"
                list="Specialization"
              />
              <datalist id="Specialization">
                <option value="PLC"></option>
                <option value="SCADA"></option>
                <option value="Robotics"></option>
                <option value="Panel Building"></option>
                <option value="Electrical Design"></option>
              </datalist>
              <button className="bg-blue-950 dark:bg-blue-700 rounded-2xl px-5 py-1.5 text-xl text-white text-center hover:bg-blue-600 dark:hover:bg-blue-500 cursor-pointer">
                Search
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
