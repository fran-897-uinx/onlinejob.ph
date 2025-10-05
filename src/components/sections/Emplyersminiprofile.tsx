"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Briefcase, Star } from "lucide-react";
import Link from "next/link";

export default function ProfileSnippet() {
  return (
    <Card className="w-full max-w-sm shadow-md hover:shadow-lg transition h-full align-middle sticky top-0">
      <CardContent className="p-5 space-y-4">
        {/* Top Section */}
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://i.pravatar.cc/150?img=32" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">Jane Doe</h3>
            <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm">
          <p className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Lagos, Nigeria
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            <Briefcase className="h-4 w-4" />
            Available for freelance • <span className="font-medium text-green-600">$40/hr</span>
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            <Star className="h-4 w-4 text-yellow-500" />
            Top Rated Talent
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          <Badge>React</Badge>
          <Badge>Next.js</Badge>
          <Badge>Node.js</Badge>
        </div>

        {/* CTA */}
        <div className="pt-3">
          <Link
            href="/Employer/profile"
            className="block text-center bg-blue-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-blue-700 transition"
          >
            View Full Profile
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
