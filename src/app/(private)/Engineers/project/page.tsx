"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "../../../../components/sections/Engnav";
import { Footer } from "../../../(public)/Footer";
import { Upload, Github, Calendar, Image, FileCode2 } from "lucide-react";

export default function PostProjectPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  // Check Authentication
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
    category: "",
    biddingType: "public",
    isPublic: true,
    thumbnail: null as File | null,
    cadFile: null as File | null,
    resources: "",
    deliverables: "",
    portfolio: "",
    contactPreference: "chat",
  });

  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm({ ...form, [type]: file });
      if (type === "thumbnail") {
        const reader = new FileReader();
        reader.onload = () => setPreview(reader.result as string);
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.cadFile) {
      alert("Please upload a CAD file before submitting.");
      return;
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value as any);
    });

    console.log("Project submitted:", Object.fromEntries(formData.entries()));
    alert("✅ Project posted successfully! (Check console for submitted data)");
    // TODO: Send formData to backend API endpoint here
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-600 dark:text-gray-300 animate-pulse">
          Redirecting to login...
        </p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            🚀 Post an Automation Project
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* === Basic Info === */}
            {[
              { key: "title", label: "Project Title", type: "text" },
              { key: "description", label: "Project Description", type: "textarea" },
              { key: "skills", label: "Required Skills (comma separated)", type: "text" },
              { key: "budget", label: "Estimated Budget ($)", type: "number" },
            ].map(({ key, label, type }) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {label}
                </label>
                {type === "textarea" ? (
                  <textarea
                    value={form[key as keyof typeof form] as string}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    rows={5}
                    className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                ) : (
                  <input
                    type={type}
                    value={form[key as keyof typeof form] as string}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                )}
              </div>
            ))}

            {/* === Category === */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Project Category
              </label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                required
              >
                <option value="">Select a category</option>
                <option value="automation">Automation</option>
                <option value="robotics">Robotics</option>
                <option value="electronics">Electronics</option>
                <option value="software">Software Integration</option>
                <option value="mechanical">Mechanical Design</option>
              </select>
            </div>

            {/* === Thumbnail Upload === */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Thumbnail Image
              </label>
              <div className="flex items-center gap-3 mt-2">
                <label className="flex items-center gap-2 cursor-pointer text-blue-600 hover:text-blue-800">
                  <Image className="w-5 h-5" />
                  <span>Upload Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "thumbnail")}
                    className="hidden"
                  />
                </label>
                {preview && (
                  <img
                    src={preview}
                    alt="Thumbnail Preview"
                    className="h-16 w-16 rounded-lg object-cover border border-gray-300"
                  />
                )}
              </div>
            </div>

            {/* === CAD File Upload === */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Upload CAD File
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-blue-600 hover:text-blue-800 mt-2">
                <FileCode2 className="w-5 h-5" />
                <span>Select File (.dwg, .dxf, .step, .stp, .iges)</span>
                <input
                  type="file"
                  accept=".dwg,.dxf,.step,.stp,.iges"
                  onChange={(e) => handleFileChange(e, "cadFile")}
                  className="hidden"
                  required
                />
              </label>
              {form.cadFile && (
                <p className="text-sm text-green-600 mt-1">
                  Uploaded: {form.cadFile.name}
                </p>
              )}
            </div>

            {/* === Links & Deliverables === */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <Github className="w-4 h-4" /> GitHub Link
              </label>
              <input
                type="url"
                placeholder="https://github.com/username/project"
                value={form.github}
                onChange={(e) => setForm({ ...form, github: e.target.value })}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Additional Resources (optional)
              </label>
              <input
                type="url"
                placeholder="Add Figma, Drive, or YouTube link"
                value={form.resources}
                onChange={(e) => setForm({ ...form, resources: e.target.value })}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Expected Deliverables
              </label>
              <textarea
                rows={3}
                placeholder="List deliverables (e.g., source code, CAD files, docs)"
                value={form.deliverables}
                onChange={(e) => setForm({ ...form, deliverables: e.target.value })}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
              />
            </div>

            {/* === Bidding, Visibility & Contact === */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Allow Bidding From
                </label>
                <select
                  value={form.biddingType}
                  onChange={(e) => setForm({ ...form, biddingType: e.target.value })}
                  className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
                >
                  <option value="public">Anyone</option>
                  <option value="invited">Only Invited Engineers</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Contact Preference
                </label>
                <select
                  value={form.contactPreference}
                  onChange={(e) =>
                    setForm({ ...form, contactPreference: e.target.value })
                  }
                  className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
                >
                  <option value="chat">Platform Chat</option>
                  <option value="email">Email</option>
                </select>
              </div>
            </div>

            {/* === Deadline === */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Deadline
              </label>
              <input
                type="date"
                value={form.deadline}
                onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
                required
              />
            </div>

            {/* === Submit Button === */}
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
