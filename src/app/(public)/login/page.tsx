"use client";

import { useState } from "react";
import { Eye } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    // TODO: Call your backend API (NextAuth, Django, Supabase, etc.)
  };

  return (
    <section id="login" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
        <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Log in. Make work happen.
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              PASSWORD
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                           bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
              >
                <Eye/>
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 rounded-lg transition"
          >
            LOGIN
          </button>
        </form>

        <div className="text-center mt-4">
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            Forgot your password?
          </a>
        </div>

        <div className="text-center mt-6 text-gray-600 dark:text-gray-400">
          Not yet registered?{" "}
          <a href="/Signup" className="text-blue-600 dark:text-blue-400 font-semibold">
            Create a free account.
          </a>
        </div>
      </div>
    </section>
  );
}
