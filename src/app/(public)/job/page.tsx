"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export default function PostJobPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  // Check auth on mount
  useEffect(() => {
    const authUser = localStorage.getItem("user");
    if (!authUser) {
      router.push("/login?redirect=/post-job");
    } else {
      setUser(JSON.parse(authUser));
    }
  }, [router]);

  const [form, setForm] = useState({
    jobTitle: "",
    company: "",
    location: "",
    jobType: "",
    salaryRange: "",
    description: "",
    requirements: "",
    deadline: "",
    github: "",
    cadFile: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.cadFile) {
      alert("Please upload a CAD file");
      return;
    }

    // Example: send data to backend API
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value as any);
    });

    console.log("Posting job:", formData);
    alert("Job posted! (Check console for data)");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm({ ...form, cadFile: e.target.files[0] });
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600">Redirecting to login...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Post a Job
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/** Text Inputs */}
            {["Job Title", "Company Name", "Location", "Salary Range ($)", "Github Link"].map((label, idx) => {
              const key = label
                .toLowerCase()
                .replace(/[^a-z]/g, "") as keyof typeof form;
              return (
                <div key={idx}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label}
                  </label>
                  <input
                    type="text"
                    value={form[key] as string}
                    onChange={(e) =>
                      setForm({ ...form, [key]: e.target.value })
                    }
                    className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    required
                  />
                </div>
              );
            })}

            {/** Job Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Job Type
              </label>
              <select
                value={form.jobType}
                onChange={(e) =>
                  setForm({ ...form, jobType: e.target.value })
                }
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                required
              >
                <option value="">Select...</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>

            {/** Description and Requirements */}
            {["description", "requirements"].map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <textarea
                  value={form[key as keyof typeof form] as string}
                  onChange={(e) =>
                    setForm({ ...form, [key]: e.target.value })
                  }
                  rows={key === "description" ? 5 : 4}
                  className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  required
                />
              </div>
            ))}

            {/** CAD File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                CAD File
              </label>
              <input
                type="file"
                accept=".dwg,.dxf,.step,.stp,.iges"
                onChange={handleFileChange}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                required
              />
            </div>

            {/** Deadline */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Application Deadline
              </label>
              <input
                type="date"
                value={form.deadline}
                onChange={(e) =>
                  setForm({ ...form, deadline: e.target.value })
                }
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                required
              />
            </div>

            {/** Submit */}
            <button
              type="submit"
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition cursor-pointer"
            >
              Post Job
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
