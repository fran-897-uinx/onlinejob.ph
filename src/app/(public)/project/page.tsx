"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {Navbar}  from "../Navbar";
import { Footer } from "../Footer";

export default function PostProjectPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  // Check auth
  useEffect(() => {
    const authUser = localStorage.getItem("user");
    if (!authUser) {
      router.push("/login?redirect=/post-project");
    } else {
      setUser(JSON.parse(authUser));
    }
  }, [router]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    skills: "",
    budget: "",
    deadline: "",
    github: "",
    cadFile: null as File | null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm({ ...form, cadFile: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.cadFile) {
      alert("Please upload a CAD file.");
      return;
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value as any);
    });

    console.log("Posting project:", formData);
    alert("Project posted! (Check console for data)");
    // TODO: Send formData to backend API
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
            Post an Automation Project
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title, Description, Skills, Budget */}
            {["title", "description", "skills", "budget"].map((key) => {
              const label =
                key === "title"
                  ? "Project Title"
                  : key === "description"
                  ? "Project Description"
                  : key === "skills"
                  ? "Used Skills"
                  : "Estimated Budget ($)";
              const isTextArea = key === "description";
              const type = key === "budget" ? "number" : "text";
              return (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label}
                  </label>
                  {isTextArea ? (
                    <textarea
                      value={form[key as keyof typeof form] as string}
                      onChange={(e) =>
                        setForm({ ...form, [key]: e.target.value })
                      }
                      rows={5}
                      className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      required
                    />
                  ) : (
                    <input
                      type={type}
                      value={form[key as keyof typeof form] as string}
                      onChange={(e) =>
                        setForm({ ...form, [key]: e.target.value })
                      }
                      className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      required
                    />
                  )}
                </div>
              );
            })}

            {/* CAD File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                CAD Display
              </label>
              <input
                type="file"
                accept=".dwg,.dxf,.step,.stp,.iges"
                onChange={handleFileChange}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                required
              />
            </div>

            {/* Github Link */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Github Link
              </label>
              <input
                type="text"
                value={form.github}
                onChange={(e) => setForm({ ...form, github: e.target.value })}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                required
              />
            </div>

            {/* Deadline */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Deadline
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

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
            >
              Post Project
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
