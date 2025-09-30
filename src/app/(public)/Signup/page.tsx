"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [employer, setEmployer] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [worker, setWorker] = useState({ name: "", email: "", password: "" });

  const handleEmployerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Employer registration:", employer);
    // TODO: Send to backend API
  };

  const handleWorkerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Worker registration:", worker);
    // TODO: Send to backend API
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Employer Signup */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            I&apos;m an Engineer Employer 
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Looking for Engineers
          </p>

          <form onSubmit={handleEmployerSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={employer.name}
              onChange={(e) =>
                setEmployer({ ...employer, name: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={employer.email}
              onChange={(e) =>
                setEmployer({ ...employer, email: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={employer.password}
              onChange={(e) =>
                setEmployer({ ...employer, password: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              required
            />
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="employer-terms" required />
              <label
                htmlFor="employer-terms"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                send me your free outsource education emails.
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="employer-terms" required />
              <label
                htmlFor="employer-terms"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 rounded-lg transition"
            >
              REGISTER
            </button>
          </form>
        </div>

        {/* Worker Signup */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            I&apos;m an Online Professional Automation Engineer
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Looking for  Projects
          </p>

          <form onSubmit={handleWorkerSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={worker.name}
              onChange={(e) => setWorker({ ...worker, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={worker.email}
              onChange={(e) => setWorker({ ...worker, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={worker.password}
              onChange={(e) =>
                setWorker({ ...worker, password: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              required
            />

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="employer-terms" required />
              <label
                htmlFor="employer-terms"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                send me your free outsource education emails.
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="worker-terms" required />
              <label
                htmlFor="worker-terms"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition"
            >
              START FINDING JOBS
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
