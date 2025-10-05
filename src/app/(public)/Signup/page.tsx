"use client";

import { useState } from "react";
import { Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import Link from "next/link";
import SocialAuth from "../social";
import { supabase } from "@/lib/supabaseClient";

export default function RegisterPage() {
  const [employer, setEmployer] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [worker, setWorker] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // ✅ Employer Signup with Supabase
  const handleEmployerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Step 1: Sign up the user with Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email: employer.email,
      password: employer.password,
    });

    if (error) {
      alert("Error: " + error.message);
      return;
    }

    // Step 2: Insert into profiles table
    const { error: profileError } = await supabase.from("profile").insert([
      {
        id: data.user?.id,
        full_name: employer.name,
        role: "employer",
      },
    ]);

    if (profileError) {
      alert("Error creating profile: " + profileError.message);
      return;
    }

    alert("Employer signed up successfully!");
    window.location.href = "/login";
  };

  // ✅ Worker Signup with Supabase
  const handleWorkerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Step 1: Sign up the user with Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email: worker.email,
      password: worker.password,
    });

    if (error) {
      alert("Error: " + error.message);
      return;
    }

    // Step 2: Insert into profiles table
    const { error: profileError } = await supabase.from("profile").insert([
      {
        id: data.user?.id,
        full_name: worker.name,
        role: "engineer",
      },
    ]);

    if (profileError) {
      alert("Error creating profile: " + profileError.message);
      return;
    }

    alert("Engineer signed up successfully!");
    window.location.href = "/login";
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-wrap w-full md:flex mt-2 sticky">
        {/* Employer Side */}
        <div
          className="relative flex flex-col items-center justify-center md:w-1/2 text-white p-10 shadow-lg bg-cover bg-center bg-blend-overlay w-full bg-gray-700 hover:bg-gray-900 cursor-pointer"
          style={{
            backgroundImage: "url('./employer.jpg')",
            backgroundBlendMode: "overlay",
          }}
        >
          <h1 className="font-bold text-2xl md:text-5xl">Hello Employers</h1>
          <p className="text-wrap text-sm font-light break-inside-auto mt-4 leading-relaxed text-center">
            Welcome to <span className="font-semibold">PLC Hire</span> — your
            trusted platform for connecting with skilled and qualified
            automation engineers. Whether you need experts in{" "}
            <span className="italic">
              industrial automation, PLC programming, robotics, or system
              integration
            </span>
            , we deliver the right talent to solve your automation challenges
            and drive efficiency in your business.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <button className="px-6 py-3 mt-6 rounded-lg font-bold bg-blue-800 text-white hover:bg-blue-900 transition duration-200 cursor-pointer">
                Join as an Employer
              </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold border-b-2">
                  Sign Up as an Employer
                </DialogTitle>
                <p className="text-sm text-gray-500 mt-1">
                  Create your account to start posting jobs and finding the best
                  engineers.
                </p>
                <SocialAuth />
              </DialogHeader>

              {/* Employer Form */}
              <form onSubmit={handleEmployerSubmit} className="space-y-4 mt-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={employer.name}
                  onChange={(e) =>
                    setEmployer({ ...employer, name: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={employer.email}
                  onChange={(e) =>
                    setEmployer({ ...employer, email: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={employer.password}
                    onChange={(e) =>
                      setEmployer({ ...employer, password: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    <Eye />
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="employer-edu" required />
                  <label
                    htmlFor="employer-edu"
                    className="text-sm text-gray-600"
                  >
                    Send me your free outsourcing education emails.
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="employer-terms" required />
                  <label
                    htmlFor="employer-terms"
                    className="text-sm text-gray-600"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-950 text-white font-bold py-2 rounded-lg transition duration-200 cursor-pointer"
                >
                  Start Posting Jobs
                </button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Worker Side */}
        <div
          className="flex flex-col items-center justify-center md:w-1/2 w-full text-white p-10 shadow-lg bg-cover bg-center bg-blend-overlay bg-gray-700 hover:bg-gray-900 cursor-pointer"
          style={{
            backgroundImage: "url('./engineers.jpg')",
            backgroundBlendMode: "overlay",
          }}
        >
          <h1 className="font-bold text-2xl md:text-5xl">Hello Engineers</h1>
          <p className="text-wrap text-sm font-light mt-4 leading-relaxed max-w-md text-center">
            Welcome to <span className="font-semibold">PLC Hire</span> — the
            platform built exclusively for automation engineers like you.
            Whether your expertise is in{" "}
            <span className="italic">
              PLC programming, robotics, industrial automation, or system
              integration
            </span>
            , here you can connect with top employers, showcase your skills, and
            secure meaningful projects.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <button className="px-6 py-3 mt-6 rounded-lg font-bold bg-gray-700 text-white hover:bg-gray-950 transition duration-200 cursor-pointer">
                Join as an Engineer
              </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold border-b-2">
                  Sign Up as an Engineer
                </DialogTitle>
                <p className="text-sm text-gray-500 mt-1">
                  Create your account to access projects and opportunities
                  tailored to your automation skills.
                </p>
                <SocialAuth />
              </DialogHeader>

              {/* Worker Form */}
              <form onSubmit={handleWorkerSubmit} className="space-y-4 mt-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={worker.name}
                  onChange={(e) =>
                    setWorker({ ...worker, name: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={worker.email}
                  onChange={(e) =>
                    setWorker({ ...worker, email: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  required
                />

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={worker.password}
                    onChange={(e) =>
                      setWorker({ ...worker, password: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    <Eye />
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="worker-auto" required />
                  <label
                    htmlFor="worker-auto"
                    className="text-sm text-gray-600"
                  >
                    I am an automation engineer and understand PLC Hire is only
                    for this field.
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="worker-ind" required />
                  <label htmlFor="worker-ind" className="text-sm text-gray-600">
                    I am an individual worker and do not represent any agency or
                    company.
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="worker-multi" required />
                  <label
                    htmlFor="worker-multi"
                    className="text-sm text-gray-600"
                  >
                    I confirm I do not have multiple accounts.
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="worker-terms" required />
                  <label
                    htmlFor="worker-terms"
                    className="text-sm text-gray-600"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 rounded-lg transition duration-200 cursor-pointer"
                >
                  Start Finding Projects
                </button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>
      <Footer />
    </>
  );
}
