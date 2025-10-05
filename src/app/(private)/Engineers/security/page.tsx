"use client";

import {Navbar}  from "../../../../components/sections/Engnav";
// import { Footer } from "@/components/sections/Footer";
import { ShieldCheck, Lock, EyeOff } from "lucide-react";

export default function SecurityPrivacyPage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            Security & Privacy
          </h1>

          {/* Security Practices */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2 text-gray-800 dark:text-gray-100">
              <ShieldCheck className="h-6 w-6 text-green-500" /> Security Practices
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              We prioritize your security by implementing industry-standard measures including:
            </p>
            <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Data encryption in transit and at rest (TLS/SSL, AES-256).</li>
              <li>Two-factor authentication (2FA) for account protection.</li>
              <li>Regular security audits and vulnerability testing.</li>
              <li>Strict access controls and secure authentication.</li>
            </ul>
          </div>

          {/* Privacy Policies */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2 text-gray-800 dark:text-gray-100">
              <Lock className="h-6 w-6 text-blue-500" /> Privacy Policies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Your privacy matters. We ensure:
            </p>
            <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-1">
              <li>No sharing of your personal data with third parties without consent.</li>
              <li>Secure storage of sensitive information like email, passwords, and financial data.</li>
              <li>Compliance with GDPR and other relevant privacy regulations.</li>
              <li>Ability to manage, download, or delete your personal data at any time.</li>
            </ul>
          </div>

          {/* User Controls */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2 text-gray-800 dark:text-gray-100">
              <EyeOff className="h-6 w-6 text-purple-500" /> User Controls
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              You are in control of your account and data:
            </p>
            <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Update your password and authentication methods anytime.</li>
              <li>Control visibility of your profile and posts.</li>
              <li>Manage notifications and privacy preferences.</li>
              <li>Report suspicious activity directly from your account settings.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}
