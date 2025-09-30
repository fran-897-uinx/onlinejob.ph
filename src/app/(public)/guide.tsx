// components/HowItWorks.tsx

import Link from "next/link";

export function Guides() {
  const How = [
    "Why?",
    "Cost",
    "Time",
    "Trust",
    "Legal",
    "Taxes",
    "Talents",
    "Security",
    "Payments",
    "Timezones",
    "Get Started"

  ];
  const toSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");
  return (
    <section className="pt-7 bg-white">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center mb-4">How it works</h2> */}
        <div className="grid md:grid-cols-1 gap-8 place-items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {How.map((talent, idx) => (
              <Link
                key={idx}
                href={`/talent/${toSlug(talent)}`}
                className="block px-4 py-3 text-blue-400 transition font-medium underline underline-blue-600 hover:text-blue-800 hover:underline-blue-800"
              >
                {talent}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
