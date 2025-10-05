"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pencil,
  Check,
  Plus,
  Upload,
  Github,
  GraduationCap,
  Award,
  FolderOpen,
  FileCode2,
  Globe,
  Briefcase,
  Link2,
} from "lucide-react";
import { Navbar } from "../../../../components/sections/Engnav";

export default function EngineerProfile() {
  const [editing, setEditing] = useState(false);

  const [name, setName] = useState("Jane Doe");
  const [bio, setBio] = useState(
    "Automation & Mechanical Engineer passionate about CAD design, PLC systems, and IoT-based manufacturing solutions."
  );
  const [location, setLocation] = useState("Lagos, Nigeria");
  const [rate, setRate] = useState("$45/hr");
  const [skills, setSkills] = useState(["SolidWorks", "AutoCAD", "PLC", "Python"]);
  const [newSkill, setNewSkill] = useState("");

  const [education, setEducation] = useState([
    { degree: "B.Eng Mechanical Engineering", school: "University of Lagos", year: "2021" },
    { degree: "Diploma in Industrial Automation", school: "MITx", year: "2023" },
  ]);

  const [certs, setCerts] = useState([
    { title: "Certified SolidWorks Professional (CSWP)", issuer: "Dassault Systèmes", year: "2024" },
    { title: "AutoDesk AutoCAD Expert", issuer: "Autodesk", year: "2023" },
  ]);

  const [githubRepos, setGithubRepos] = useState([
    { title: "Hydraulic-System-Simulation", link: "https://github.com/janedoe/Hydraulic-System-Simulation" },
    { title: "Bridge-Stress-Analysis", link: "https://github.com/janedoe/Bridge-Stress-Analysis" },
  ]);

  const [cadPortfolio, setCadPortfolio] = useState([
    { title: "3D Engine Assembly", image: "/cad/engine.png", link: "#" },
    { title: "Hydraulic Press Model", image: "/cad/press.png", link: "#" },
  ]);

  const toggleEdit = () => setEditing(!editing);

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
        {/* Header Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
          <CardContent className="flex flex-col sm:flex-row items-center gap-6 p-6">
            <Avatar className="h-24 w-24 border-2 border-blue-500">
              <AvatarImage src="https://i.pravatar.cc/150?img=32" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center sm:text-left">
              {editing ? (
                <>
                  <Input value={name} onChange={(e) => setName(e.target.value)} className="mb-2" />
                  <Textarea value={bio} onChange={(e) => setBio(e.target.value)} />
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-bold">{name}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">{bio}</p>
                </>
              )}

              <div className="flex justify-center sm:justify-start gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href="https://github.com/janedoe" target="_blank" className="flex items-center gap-2">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" className="flex items-center gap-2">
                    <FolderOpen className="h-4 w-4" /> CAD Portfolio
                  </a>
                </Button>
              </div>
            </div>

            <Button onClick={toggleEdit} variant="secondary">
              {editing ? <Check className="h-4 w-4 mr-1" /> : <Pencil className="h-4 w-4 mr-1" />}
              {editing ? "Save" : "Edit"}
            </Button>
          </CardContent>
        </Card>

        {/* Location, Rate, and Skills */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Professional Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {editing ? (
                <>
                  <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
                  <Input value={rate} onChange={(e) => setRate(e.target.value)} placeholder="Rate (e.g. $40/hr)" />
                </>
              ) : (
                <>
                  <p><strong>Location:</strong> {location}</p>
                  <p><strong>Rate:</strong> {rate}</p>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <Badge key={i} variant="secondary">{skill}</Badge>
              ))}
              {editing && (
                <div className="flex gap-2 mt-2">
                  <Input value={newSkill} placeholder="Add skill" onChange={(e) => setNewSkill(e.target.value)} />
                  <Button
                    onClick={() => {
                      if (newSkill) {
                        setSkills([...skills, newSkill]);
                        setNewSkill("");
                      }
                    }}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle><GraduationCap className="inline mr-2" /> Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {education.map((edu, i) => (
              <div key={i} className="border-b pb-2">
                <p className="font-medium">{edu.degree}</p>
                <p className="text-sm text-gray-500">{edu.school} • {edu.year}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardHeader>
            <CardTitle><Award className="inline mr-2" /> Certifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {certs.map((cert, i) => (
              <div key={i} className="border-b pb-2">
                <p className="font-medium">{cert.title}</p>
                <p className="text-sm text-gray-500">{cert.issuer} • {cert.year}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* GitHub Projects */}
        <Card>
          <CardHeader>
            <CardTitle><FileCode2 className="inline mr-2" /> GitHub Repositories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {githubRepos.map((repo, i) => (
              <div key={i} className="flex justify-between items-center border p-3 rounded-lg">
                <span>{repo.title}</span>
                <a href={repo.link} target="_blank" className="text-blue-600 underline text-sm flex items-center gap-1">
                  <Link2 className="h-4 w-4" /> View
                </a>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* CAD Portfolio */}
        <Card>
          <CardHeader>
            <CardTitle><FolderOpen className="inline mr-2" /> CAD Portfolio</CardTitle>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-4">
            {cadPortfolio.map((cad, i) => (
              <div key={i} className="border rounded-lg overflow-hidden hover:shadow-md transition">
                <img src={cad.image} alt={cad.title} className="w-full h-40 object-cover" />
                <div className="p-3 flex justify-between items-center">
                  <span className="font-medium">{cad.title}</span>
                  <a href={cad.link} className="text-blue-600 text-sm underline">View</a>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Resume Upload */}
        <Card>
          <CardHeader>
            <CardTitle><Upload className="inline mr-2" /> Resume</CardTitle>
          </CardHeader>
          <CardContent>
            {editing ? (
              <Button variant="outline" className="w-full">
                <Upload className="h-4 w-4 mr-2" /> Upload Resume (PDF)
              </Button>
            ) : (
              <p className="text-sm text-gray-500">Resume uploaded successfully ✅</p>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
