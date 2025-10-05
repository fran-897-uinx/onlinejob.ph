"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  MapPin,
  Briefcase,
  Star,
  GraduationCap,
  Github,
  FileCode2,
  Linkedin,
  Award,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function EngineerMiniProfile() {
  return (
    <Card className="w-full max-w-sm shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl bg-white dark:bg-gray-900 border dark:border-gray-700">
      {/* HEADER */}
      <CardHeader className="flex items-center gap-4 border-b pb-4">
        <Avatar className="h-16 w-16 border-2 border-blue-600">
          <AvatarImage src="https://i.pravatar.cc/150?img=32" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Jane Doe
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Mechanical Engineer | CAD Specialist
          </p>
          <div className="flex items-center gap-2 mt-1">
            <Badge
              variant="outline"
              className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
            >
              Available for hire
            </Badge>
          </div>
        </div>
      </CardHeader>

      {/* MAIN CONTENT */}
      <CardContent className="p-5 space-y-4">
        {/* Location & Rate */}
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-600" />
            Lagos, Nigeria
          </p>
          <p className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-blue-600" />
            <span>Freelance • </span>
            <span className="font-medium text-green-600 dark:text-green-400">
              $45/hr
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" />
            Top Rated Engineer
          </p>
        </div>

        {/* Skills */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Core Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            <Badge>AutoCAD</Badge>
            <Badge>SolidWorks</Badge>
            <Badge>Fusion 360</Badge>
            <Badge>MATLAB</Badge>
            <Badge>Project Management</Badge>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Certifications
          </h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-2">
              <Award className="h-4 w-4 text-blue-600" />
              Autodesk Certified Professional (AutoCAD)
            </li>
            <li className="flex items-center gap-2">
              <Award className="h-4 w-4 text-blue-600" />
              SolidWorks Mechanical Design Specialist
            </li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Education
          </h4>
          <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <GraduationCap className="h-4 w-4 text-blue-600" />
            B.Eng. Mechanical Engineering — University of Lagos
          </p>
        </div>

        {/* Portfolio Links */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Portfolios & Integrations
          </h4>
          <div className="flex gap-3">
            <Link
              href="https://github.com/"
              target="_blank"
              className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
            >
              <Github className="h-4 w-4" /> GitHub
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </Link>
            <Link
              href="https://grabcad.com/"
              target="_blank"
              className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
            >
              <FileCode2 className="h-4 w-4" /> CAD
            </Link>
          </div>
        </div>

        {/* Showcase / Project Samples */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Featured Projects
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="#"
              className="block relative group overflow-hidden rounded-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1581093448798-5d07cbb6656e?auto=format&fit=crop&w=400&q=60"
                alt="CAD Model"
                className="rounded-lg object-cover w-full h-24 group-hover:opacity-80 transition"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-xs p-1 w-full text-center">
                Hydraulic Arm Design
              </div>
            </Link>
            <Link
              href="#"
              className="block relative group overflow-hidden rounded-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1629904853893-c2c8981a1f59?auto=format&fit=crop&w=400&q=60"
                alt="Project"
                className="rounded-lg object-cover w-full h-24 group-hover:opacity-80 transition"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-xs p-1 w-full text-center">
                Smart HVAC System
              </div>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Link
            href="/engineers/profile"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 text-sm font-medium transition"
          >
            View Full Profile
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
