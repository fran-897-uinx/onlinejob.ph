"use client";

import { useState } from "react";
import { Testimonials } from "../Testimonials";

interface Plan {
  name: string;
  price: string;
  billing: string;
  features: string[];
  limitations: string[];
  buttonText: string;
  highlight?: boolean;
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [activecard, setActivecard] = useState(false)

  const plans: Plan[] = [
    {
      name: "FREE",
      price: "$0",
      billing: "forever",
      limitations: [
        "Hire & Commuinicating with Workers",
      ],
      features: [
        "Up to 3 Job Posts",
        "Max 15 applications per job",
        "2 days job post approval",
        "View job applications",
        "Use Timeproof",
        "Bookmark workers",
        "EasyPay",
      ],
      buttonText: "REGISTER",
      highlight: activecard,
    },
    {
      name: "PRO",
      price: billingCycle === "monthly" ? "$69" : "$690",
      billing: billingCycle === "monthly" ? "per month" : "per year (save 16%)",
      features: [
        "Hire & Communicate with Workers",
        "Up to 10 Job Posts",
        "Max 200 applications per job",
        "Instant Job Post Approval",
        "Contact 75 workers / month",
        "View Job Applications",
        "Use Timeproof",
        "Bookmark workers",
        "EasyPay",
        "Read Worker Reviews",
      ],
      limitations: [],
      buttonText: "UPGRADE",
      highlight: activecard,
    },
    {
      name: "PREMIUM",
      price: billingCycle === "monthly" ? "$99" : "$990",
      billing: billingCycle === "monthly" ? "per month" : "per year (save 17%)",
      features: [
        "Hire & Communicate with Workers",
        "Up to 10 Job Posts",
        "Max 200 applications per job",
        "Instant Job Post Approval",
        "Contact 500 workers / month",
        "View Job Applications",
        "Use Timeproof",
        "Bookmark workers",
        "EasyPay",
        "Read Worker Reviews",
        "Unlimited Background Data Checks",
        "Worker Mentoring Service",
        "AI Matching",
      ],
      limitations: [],
      buttonText: "UPGRADE",
      highlight: activecard,
    },
  ];

  return (
    <section className="bg-gray-200 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
          16,982 employers upgraded this month.
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Hire direct. <span className="font-bold">No salary markups or ongoing fees.</span>
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 rounded-lg font-medium ${
              billingCycle === "monthly"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-4 py-2 rounded-lg font-medium ${
              billingCycle === "annual"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            Annual
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-xl shadow-lg p-8 flex flex-col justify-between transition transform hover:scale-105 ${
              plan.highlight
                ? "border-4 border-blue-600 bg-white dark:bg-gray-800"
                : "bg-white dark:bg-gray-800"
            }`}
          >
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {plan.name}
              </h3>
              <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mt-2">
                {plan.price}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {plan.billing}
              </p>

              <ul className="mt-6 space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-gray-700 dark:text-gray-300 flex items-start"
                  >
                    ✅ <span className="ml-2">{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((lim, i) => (
                  <li
                    key={i}
                    className="text-gray-500 dark:text-gray-400 flex items-start line-through"
                  >
                    ❌<span className="ml-2">{lim}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`mt-8 px-6 py-3 rounded-lg font-bold  ${
                activecard === true
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer"
                }`}
              onClick={() => setActivecard(true)}
              onDoubleClick={()=>setActivecard(false)}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-20">
        <Testimonials/>
      </div>
    </section>
  );
}
