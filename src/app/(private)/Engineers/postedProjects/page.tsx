"use client";

import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import {Navbar}  from "../../../../components/sections/Engnav";


interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  jobType: string;
  salaryRange: string;
  postedAt: string;
}

const sampleJobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Techify",
    location: "Remote",
    jobType: "Full-time",
    salaryRange: "$3000 - $5000",
    postedAt: "2025-10-01",
  },
  {
    id: 2,
    title: "Automation Engineer",
    company: "AutoSys",
    location: "Berlin",
    jobType: "Contract",
    salaryRange: "$4000 - $6000",
    postedAt: "2025-09-28",
  },
];

export default function UserJobsPage() {
  const [jobs, setJobs] = useState<Job[]>(sampleJobs);

  const deleteJob = (id: number) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  const editJob = (id: number) => {
    // You can redirect to an edit page
    alert(`Redirect to edit job with ID: ${id}`);
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            Your Posted Jobs
          </h1>

          {jobs.length === 0 ? (
            <p className="text-gray-500 text-center py-10">
              You haven’t posted any jobs yet.
            </p>
          ) : (
            <ScrollArea className="max-h-[70vh]">
              <div className="flex flex-col gap-4">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="border rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <div className="flex-1">
                      <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100">
                        {job.title}
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-300">
                        {job.company} • {job.location} • {job.jobType} •{" "}
                        {job.salaryRange}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Posted: {job.postedAt}
                      </p>
                    </div>
                    <div className="flex gap-2 mt-4 md:mt-0">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => editJob(job.id)}
                      >
                        <Edit className="h-4 w-4 mr-1" /> Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteJob(job.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" /> Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
      </section>
    </>
  );
}
