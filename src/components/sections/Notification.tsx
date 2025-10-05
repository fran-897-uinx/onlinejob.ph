"use client";

import { Bell, CheckCircle, Briefcase, MessageSquare } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "job",
      text: "Techify invited you to apply for a Frontend Developer role.",
      time: "2h ago",
      icon: <Briefcase className="h-5 w-5 text-blue-500" />,
      new: true,
    },
    {
      id: 2,
      type: "message",
      text: "Jane Doe sent you a message.",
      time: "4h ago",
      icon: <MessageSquare className="h-5 w-5 text-green-500" />,
      new: true,
    },
    {
      id: 3,
      type: "achievement",
      text: "You earned a Top Rated badge. Congrats! 🎉",
      time: "1d ago",
      icon: <CheckCircle className="h-5 w-5 text-yellow-500" />,
      new: false,
    },
    {
      id: 4,
      type: "job",
      text: "Company X invited you to apply for a Backend Developer role.",
      time: "3d ago",
      icon: <Briefcase className="h-5 w-5 text-blue-500" />,
      new: false,
    },
    {
      id: 5,
      type: "message",
      text: "John Smith sent you a message.",
      time: "4d ago",
      icon: <MessageSquare className="h-5 w-5 text-green-500" />,
      new: true,
    },
  ];

  return (
    <div className="container mx-auto px-2s py-6 h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Bell className="h-6 w-6 text-blue-600" /> Notifications
        </h1>
      </div>

      {/* Notifications List */}
      <ScrollArea className="flex-1 border rounded-l-lg p-4 border-r-0 h-full sticky">
        <div className="flex flex-col gap-3">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer relative"
            >
              {/* Icon */}
              <div className="mt-1">{notif.icon}</div>

              {/* Text */}
              <div className="flex-1">
                <p className="text-sm flex items-center gap-2">
                  {notif.text}
                  {notif.new && <Badge variant="destructive" className="text-xs">New</Badge>}
                </p>
                <span className="text-xs text-muted-foreground">{notif.time}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Footer / View All */}
      <div className="mt-4 text-center">
        <button className="text-blue-600 font-medium hover:underline cursor-pointer">
          View All Notifications →
        </button>
      </div>
    </div>
  );
}
