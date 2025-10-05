"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  CheckCircle,
  Briefcase,
  MessageSquare,
  XCircle,
} from "lucide-react";
import { Navbar } from "@/components/sections/EmployersNav";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

interface Notification {
  id: number;
  type: "job" | "message" | "achievement" | "system";
  text: string;
  time: string;
  icon: React.ReactNode;
  new?: boolean;
  details?: string;
}

const sampleNotifications: Notification[] = [
  {
    id: 1,
    type: "job",
    text: "Techify invited you to apply for a Frontend Developer role.",
    details:
      "Techify is looking for a Frontend Developer with experience in React and Next.js. Apply before 10/10/2025.",
    time: "2h ago",
    icon: <Briefcase className="h-5 w-5 text-blue-500" />,
    new: true,
  },
  {
    id: 2,
    type: "message",
    text: "Jane Doe sent you a message.",
    details: "Hey, can you review the design I sent? Looking forward to your feedback.",
    time: "4h ago",
    icon: <MessageSquare className="h-5 w-5 text-green-500" />,
    new: true,
  },
  {
    id: 3,
    type: "achievement",
    text: "You earned a Top Rated badge. Congrats! 🎉",
    details: "You’ve achieved a Top Rated status on the platform. Keep up the great work!",
    time: "1d ago",
    icon: <CheckCircle className="h-5 w-5 text-yellow-500" />,
    new: false,
  },
  {
    id: 4,
    type: "system",
    text: "Your profile has been successfully updated.",
    details: "Your profile changes have been saved and are now live on the platform.",
    time: "3d ago",
    icon: <XCircle className="h-5 w-5 text-red-500" />,
    new: false,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(sampleNotifications);
  const [filter, setFilter] = useState<"all" | "new" | "job" | "message" | "achievement">("all");
  const [activeNotification, setActiveNotification] = useState<Notification | null>(null);

  const filteredNotifications = notifications.filter((n) => {
    if (filter === "all") return true;
    if (filter === "new") return n.new;
    return n.type === filter;
  });

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, new: false } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, new: false })));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-6 h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Bell className="h-6 w-6 text-blue-600" /> Notifications
          </h1>
          <button
            className="text-sm font-medium text-blue-600 hover:underline"
            onClick={markAllAsRead}
          >
            Mark all as read
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {["all", "new", "job", "message", "achievement"].map((tab) => (
            <button
              key={tab}
              className={`px-3 py-1 rounded-full text-sm font-medium border ${
                filter === tab
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-transparent text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700"
              }`}
              onClick={() =>
                setFilter(tab as "all" | "new" | "job" | "message" | "achievement")
              }
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <ScrollArea className="flex-1 border rounded-lg p-4">
          {filteredNotifications.length === 0 ? (
            <p className="text-center text-gray-400 mt-6">No notifications</p>
          ) : (
            <div className="flex flex-col gap-3">
              {filteredNotifications.map((notif) => (
                <Dialog key={notif.id} open={activeNotification?.id === notif.id} onOpenChange={(open) => !open && setActiveNotification(null)}>
                  <DialogTrigger asChild>
                    <div
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer relative border-b-2"
                      onClick={() => {
                        setActiveNotification(notif);
                        markAsRead(notif.id);
                      }}
                    >
                      <div className="mt-1">{notif.icon}</div>
                      <div className="flex-1 flex flex-col">
                        <p className="text-sm flex items-center gap-2">
                          {notif.text}
                          {notif.new && (
                            <Badge variant="destructive" className="text-xs">
                              New
                            </Badge>
                          )}
                        </p>
                        <span className="text-xs text-muted-foreground mt-1">
                          {notif.time}
                        </span>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        {notif.type.charAt(0).toUpperCase() + notif.type.slice(1)} Notification
                      </DialogTitle>
                      <DialogDescription>{notif.details}</DialogDescription>
                      <DialogClose className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Close</DialogClose>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          )}
        </ScrollArea>

        {/* Footer */}
        <div className="mt-4 text-center">
          <button className="text-blue-600 font-medium hover:underline">
            View All Notifications →
          </button>
        </div>
      </div>
    </>
  );
}
