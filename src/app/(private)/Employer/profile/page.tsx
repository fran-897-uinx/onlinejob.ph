"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil, Check, Plus, Upload } from "lucide-react";
import { Navbar } from "@/components/sections/EmployersNav";

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);

  // Basic info state
  const [name, setName] = useState("Jane Doe");
  const [bio, setBio] = useState(
    "Full-stack developer with 5+ years of experience."
  );
  const [location, setLocation] = useState("Lagos, Nigeria");
  const [rate, setRate] = useState("$40/hr");

  // Skills
  const [skills, setSkills] = useState(["React", "Next.js", "Node.js"]);
  const [newSkill, setNewSkill] = useState("");

  // Certifications
  const [certs, setCerts] = useState([
    { title: "AWS Certified Developer", issuer: "Amazon", year: "2023" },
    { title: "Google Cloud Architect", issuer: "Google", year: "2022" },
  ]);

  // Industries
  const [industries, setIndustries] = useState(["Tech", "Finance"]);

  // Portfolio
  const [portfolio, setPortfolio] = useState([
    { title: "John Doe portfolio", link: "https://example.com" },
  ]);
      // Projects
  const [projects, setProjects] = useState([
    { title: "E-commerce Website", link: "https://example.com" },
    { title: "Analytics Dashboard", link: "https://example.com" },
  ]);
  const toggleEdit = () => setEditing(!editing);

  return (
    <>
      <Navbar/>
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <Card>
        <CardContent className="flex items-center gap-4 p-6">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://i.pravatar.cc/150?img=32" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            {editing ? (
              <>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-2"
                />
                <Textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-muted-foreground">{bio}</p>
              </>
            )}
          </div>

          <Button onClick={toggleEdit} variant="outline" size="icon">
            {editing ? (
              <Check className="h-4 w-4" />
            ) : (
              <Pencil className="h-4 w-4" />
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Location & Rate */}
      <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {editing ? (
            <>
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Input value={rate} onChange={(e) => setRate(e.target.value)} />
            </>
          ) : (
            <>
              <p>
                <strong>Location:</strong> {location}
              </p>
              <p>
                <strong>Rate:</strong> {rate}
              </p>
            </>
          )}
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <Badge key={i}>{skill}</Badge>
          ))}
          {editing && (
            <div className="flex gap-2">
              <Input
                value={newSkill}
                placeholder="Add skill"
                onChange={(e) => setNewSkill(e.target.value)}
              />
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

      {/* Certifications */}
      <Card>
        <CardHeader>
          <CardTitle>Certifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {certs.map((cert, i) => (
            <div key={i} className="border-b pb-2">
              <p className="font-medium">{cert.title}</p>
              <p className="text-sm text-muted-foreground">
                {cert.issuer} • {cert.year}
              </p>
            </div>
          ))}
          {editing && (
            <Button variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" /> Add Certification
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Industries Served */}
      <Card>
        <CardHeader>
          <CardTitle>Industries Served</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2 flex-wrap">
          {industries.map((ind, i) => (
            <Badge key={i} variant="secondary">
              {ind}
            </Badge>
          ))}
          {editing && (
            <Button variant="outline" className="flex items-center gap-2">
              <Plus className="h-4 w-4" /> Add Industry
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Portfolio */}
      <Card>
        <CardHeader>
          <CardTitle>Portfolio</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {portfolio.map((proj, i) => (
            <div
              key={i}
              className="flex justify-between items-center border p-3 rounded-lg"
            >
              <span>{proj.title}</span>
              <a
                href={proj.link}
                target="_blank"
                className="text-blue-600 text-sm underline"
              >
                View
              </a>
            </div>
          ))}
          {editing && (
            <Button variant="outline" className="w-full">
              <Upload className="h-4 w-4 mr-2" /> Upload Portfolio Sample
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Projects */}
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="flex justify-between items-center border p-3 rounded-lg"
            >
              <span>{proj.title}</span>
              <a
                href={proj.link}
                target="_blank"
                className="text-blue-600 text-sm underline"
              >
                View
              </a>
            </div>
          ))}
          {editing && (
            <Button variant="outline" className="w-full">
              <Upload className="h-4 w-4 mr-2" /> Upload Portfolio Sample
            </Button>
          )}
        </CardContent>
      </Card>
      </div>
      </>
  );
}
