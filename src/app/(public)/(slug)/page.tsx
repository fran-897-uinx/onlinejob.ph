import { notFound } from "next/navigation";
import { Navbar } from "../Navbar";

const peopleByTalent: Record<string, string[]> = {
  "web-developers": ["Alice Johnson", "David Francis", "Michael Lee"],
  "frontend-developers": ["Sarah Kim", "James Brown"],
  "backend-developers": ["John Doe", "Mary Ann"],
  "ui/ux-designers": ["Linda Smith", "Carlos Garcia"],
  "seo-specialists": ["Emma Wilson", "Daniel Jones"],
  "content-writers": ["Sophia Martinez", "Oliver Clark"],
  "social-media-managers": ["Grace Liu", "Noah White"],
  "virtual-assistants": ["Isabella Lopez", "Ethan Miller"],
};

export default function TalentPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const people = peopleByTalent[slug];

  if (!people) {
    return notFound(); // 404 if talent not found
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold text-gray-800 capitalize mb-8">
          {slug.replace(/-/g, " ")}
        </h1>

        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {people.map((person, idx) => (
            <li
              key={idx}
              className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold text-gray-700">{person}</h2>
              <p className="text-sm text-gray-500">Available for hire</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
