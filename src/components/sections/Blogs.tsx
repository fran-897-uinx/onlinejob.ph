"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  FolderGit2,
  Calendar,
  Heart,
  MessageSquare,
  Star,
  GitBranch,
  FileCode2,
  DollarSign,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const posts = [
  {
    id: 1,
    type: "project",
    title: "AI-Powered Resume Builder",
    author: {
      id: "jane-doe",
      name: "Jane Doe",
      role: "Full-Stack Developer",
      avatar: "https://i.pravatar.cc/150?img=20",
      github: "https://github.com/janedoe",
      cad: "https://grabcad.com/janedoe",
    },
    date: "Sept 25, 2025",
    tags: ["Next.js", "AI", "Tailwind"],
    description:
      "An intelligent resume builder that tailors CVs based on job descriptions and skills. Open for collaboration or bidding.",
    bids: [
      { engineer: "Alex Kim", amount: 200, note: "Can deliver in 5 days." },
      { engineer: "Sarah Lee", amount: 250, note: "Includes testing & docs." },
    ],
  },
  {
    id: 2,
    type: "job",
    title: "Frontend Developer at Techify",
    author: {
      id: "john-smith",
      name: "John Smith",
      role: "HR Manager",
      avatar: "https://i.pravatar.cc/150?img=10",
    },
    date: "Sept 28, 2025",
    tags: ["React", "TypeScript", "Remote"],
    description:
      "We’re hiring a frontend engineer to build SaaS tools. Fully remote, competitive pay, growth opportunity.",
  },
];

export default function CommunityFeed() {
  const [likes, setLikes] = useState<{ [key: number]: number }>({});
  const [comments, setComments] = useState<{ [key: number]: string[] }>({});
  const [newComment, setNewComment] = useState<{ [key: number]: string }>({});
  const [bids, setBids] = useState<{ [key: number]: { engineer: string; amount: number; note: string }[] }>(
    Object.fromEntries(posts.map((p) => [p.id, p.bids || []]))
  );
  const [activeCommentBox, setActiveCommentBox] = useState<number | null>(null);

  const handleLike = (id: number) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleComment = (id: number) => {
    if (!newComment[id]) return;
    setComments((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), newComment[id]],
    }));
    setNewComment((prev) => ({ ...prev, [id]: "" }));
  };

  const handleBid = (id: number, engineer: string, amount: number, note: string) => {
    if (!engineer || !amount) return;
    setBids((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), { engineer, amount, note }],
    }));
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">
        🔧 Community Feed
      </h1>

      {posts.map((post) => (
        <Card
          key={post.id}
          className="shadow-sm hover:shadow-lg transition rounded-2xl border border-gray-200 bg-white dark:bg-gray-900"
        >
          <CardHeader className="flex flex-row flex-wrap sm:flex-nowrap items-center gap-3">
            {/* Clickable Avatar + Name */}
            <Link
              href={`/profile/${post.author.id}`}
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <Avatar className="w-12 h-12">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold hover:underline">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">{post.author.role}</p>
              </div>
            </Link>

            {/* GitHub / CAD */}
            <div className="flex gap-2 ml-auto flex-wrap">
              {post.author.github && (
                <Link
                  href={post.author.github}
                  target="_blank"
                  className="text-blue-600 text-xs flex items-center gap-1 hover:underline"
                >
                  <GitBranch className="h-3 w-3" /> GitHub
                </Link>
              )}
              {post.author.cad && (
                <Link
                  href={post.author.cad}
                  target="_blank"
                  className="text-green-600 text-xs flex items-center gap-1 hover:underline"
                >
                  <FileCode2 className="h-3 w-3" /> CAD
                </Link>
              )}
            </div>
          </CardHeader>

          <CardContent className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              {post.type === "job" ? (
                <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                  <Briefcase className="h-3 w-3" /> Job
                </Badge>
              ) : (
                <Badge className="flex items-center gap-1 w-fit">
                  <FolderGit2 className="h-3 w-3" /> Project
                </Badge>
              )}
              <h2 className="text-lg font-semibold leading-tight">{post.title}</h2>
            </div>

            <p className="text-sm text-muted-foreground">{post.description}</p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Bidding Section */}
            {post.type === "project" && (
              <div className="border-t pt-3">
                <h3 className="font-semibold text-sm flex items-center gap-1 mb-2">
                  <DollarSign className="h-4 w-4" /> Active Bids
                </h3>
                {bids[post.id]?.length ? (
                  <ul className="text-sm space-y-1">
                    {bids[post.id].map((bid, idx) => (
                      <li key={idx} className="flex justify-between items-center border-b py-1">
                        <span>
                          <strong>{bid.engineer}</strong>: ${bid.amount} – {bid.note}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-muted-foreground">No bids yet.</p>
                )}

                <div className="flex flex-col sm:flex-row gap-2 mt-2">
                  <Input
                    placeholder="Engineer Name"
                    id={`engineer-${post.id}`}
                    className="sm:w-1/4"
                  />
                  <Input
                    placeholder="Bid Amount ($)"
                    id={`amount-${post.id}`}
                    type="number"
                    className="sm:w-1/4"
                  />
                  <Input
                    placeholder="Short note"
                    id={`note-${post.id}`}
                    className="sm:flex-1"
                  />
                  <Button
                    onClick={() =>
                      handleBid(
                        post.id,
                        (document.getElementById(`engineer-${post.id}`) as HTMLInputElement)?.value,
                        Number((document.getElementById(`amount-${post.id}`) as HTMLInputElement)?.value),
                        (document.getElementById(`note-${post.id}`) as HTMLInputElement)?.value
                      )
                    }
                    size="sm"
                    className="sm:w-fit"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex flex-col gap-3 border-t pt-3">
            {/* Like + Comment + Rating */}
            <div className="flex justify-between items-center justify-items-start text-sm gap-2">
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(post.id)}
                  className="flex items-center gap-1"
                >
                  <Heart className="h-4 w-4 text-red-500" /> {likes[post.id] || 0}
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() =>
                    setActiveCommentBox(activeCommentBox === post.id ? null : post.id)
                  }
                >
                  <MessageSquare className="h-4 w-4" />
                  {comments[post.id]?.length || 0}
                  <ChevronDown
                    className={`h-3 w-3 transition-transform ${
                      activeCommentBox === post.id ? "rotate-180" : ""
                    }`}
                  />
                </Button>

                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-4 w-4" /> 4.8
                </div>
              </div>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Calendar className="h-4 w-4" /> {post.date}
              </span>
            </div>

            {/* Comment Dropdown */}
            <AnimatePresence>
              {activeCommentBox === post.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full overflow-hidden space-y-2"
                >
                  <Textarea
                    placeholder="Leave a comment..."
                    value={newComment[post.id] || ""}
                    onChange={(e) =>
                      setNewComment({ ...newComment, [post.id]: e.target.value })
                    }
                  />
                  <Button onClick={() => handleComment(post.id)} size="sm">
                    Post Comment
                  </Button>

                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {comments[post.id]?.map((comment, idx) => (
                      <p
                        key={idx}
                        className="text-sm border rounded-md p-2 text-muted-foreground bg-gray-50 dark:bg-gray-800"
                      >
                        💬 {comment}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <Link
              href={`/posts/${post.id}`}
              className="text-blue-600 text-sm mt-2 hover:underline self-end"
            >
              View Full Details →
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
