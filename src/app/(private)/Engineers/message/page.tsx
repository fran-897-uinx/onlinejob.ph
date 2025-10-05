"use client";

import { useState, useRef, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Paperclip,
  Send,
  Mic,
  Video,
  ImageIcon,
  Smile,
  FileText,
  Layers,
  LogOutIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import dynamic from "next/dynamic";
import {Navbar}  from "../../../../components/sections/Engnav";

// Lazy load emoji picker
const Picker = dynamic(() => import("@emoji-mart/react"), { ssr: false });

interface User {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  unread: number;
}

interface Message {
  id: number;
  fromUser: boolean;
  text?: string;
  fileUrl?: string;
  fileName?: string;
  timestamp: string;
}
interface MessagesMap {
  [userId: number]: Message[];
}

const sampleUsers: User[] = [
  {
    id: 1,
    name: "Jane Doe",
    avatar: "/avatars/jane.jpg",
    lastMessage: "Send me the CAD file.",
    unread: 2,
  },
  {
    id: 2,
    name: "John Smith",
    avatar: "/avatars/john.jpg",
    lastMessage: "Thanks for the update.",
    unread: 0,
  },
];

const sampleMessages: Message[] = [
  {
    id: 1,
    fromUser: false,
    text: "Hi, did you finish the design?",
    timestamp: "10:00 AM",
  },
  {
    id: 2,
    fromUser: true,
    text: "Almost done, sending CAD shortly.",
    timestamp: "10:05 AM",
  },
];

export default function MessagesPage() {
  const [users, setUsers] = useState<User[]>(sampleUsers);
  const [activeUser, setActiveUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [newMessage, setNewMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [messagesMap, setMessagesMap] = useState<MessagesMap>({
    1: sampleMessages, // messages for Jane Doe
    2: [], // messages for John Smith
  });

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const addEmoji = (emoji: any) => setNewMessage((prev) => prev + emoji.native);

  const sendMessage = () => {
    if (!newMessage.trim() || !activeUser) return;

    const newMsg: Message = {
      id: Date.now(),
      fromUser: true,
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessagesMap((prev) => ({
      ...prev,
      [activeUser.id]: [...(prev[activeUser.id] || []), newMsg],
    }));

    setNewMessage("");
  };

  const currentMessages = activeUser ? messagesMap[activeUser.id] || [] : [];

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row h-screen">
        {/* Users List */}
        <div
          className={`md:w-1/3 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-all ${
            activeUser ? "hidden md:flex" : "flex"
          }`}
        >
          <div className="p-4 border-b">
            <Input placeholder="Search users..." />
          </div>
          <ScrollArea className="flex-1">
            <div className="flex flex-col">
              {users.map((user) => (
                <div
                  key={user.id}
                  className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg ${
                    activeUser?.id === user.id
                      ? "bg-gray-200 dark:bg-gray-700"
                      : ""
                  }`}
                  onClick={() => setActiveUser(user)}
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {user.lastMessage}
                    </p>
                  </div>
                  {user.unread > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {user.unread}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Chat Window */}
        {activeUser && (
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b">
              <Avatar className="h-10 w-10">
                <AvatarImage src={activeUser.avatar} alt={activeUser.name} />
                <AvatarFallback>{activeUser.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold">{activeUser.name}</p>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
              <div className="ml-auto flex gap-2">
                <Button variant="ghost" size="icon">
                  <Video className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Mic className="h-5 w-5" />
                </Button>
                {/* Switch Chat */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setActiveUser(null)}
                >
                  <LogOutIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4 ">
              <div className="flex flex-col gap-3 h-full overflow-y-auto" ref={scrollRef}>
                {currentMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col max-w-md p-2 rounded-lg ${
                      msg.fromUser
                        ? "self-end bg-blue-600 text-white"
                        : "self-start bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                    }`}
                  >
                    {msg.text && <p>{msg.text}</p>}
                    {msg.fileName && (
                      <a
                        href={msg.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-xs mt-1"
                      >
                        {msg.fileName}
                      </a>
                    )}
                    <span className="text-xs mt-1 self-end text-gray-400 dark:text-gray-300">
                      {msg.timestamp}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="flex items-center gap-2 p-3 border-t relative">
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1"
              />

              {/* Emoji */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowEmoji(!showEmoji)}
                >
                  <Smile className="h-5 w-5" />
                </Button>
                {showEmoji && (
                  <div className="absolute bottom-10 right-0 z-50">
                    <Picker onEmojiSelect={addEmoji} />
                  </div>
                )}
              </div>

              {/* Attach */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <FileText className="w-4 h-4 mr-2" /> File
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ImageIcon className="w-4 h-4 mr-2" /> Image
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Layers className="w-4 h-4 mr-2" /> CAD
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Other</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="outline" size="icon" onClick={sendMessage}>
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
