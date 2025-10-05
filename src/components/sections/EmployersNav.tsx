"use client";

/**
 * @author: @kokonutui
 * @description: LinkedIn-style advanced KokonutUI Navbar with integrated ActionSearchBar
 * @version: 2.0.0
 * @date: 2025-10-02
 */

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";

import {
  ChevronDown,
  Moon,
  Sun,
  LucideMenu,
  X,
  User,
  Search,
  Send,
  BarChart2,
  Video,
  PlaneTakeoff,
  AudioLines,
  LayoutGrid,
  XCircle,
  Clock,
  LogOut,
  BadgeDollarSign,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Briefcase,
  Megaphone,
  Trash2,
  Settings,
  HelpCircle,
  Languages,
  FileText,
  ShieldCheck,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// ✅ KokonutUI
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
// import { KInput, KAvatar, KBadge } from "kokonutui";
import useDebounce from "@/hooks/use-debounce";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "@radix-ui/react-dropdown-menu";

/* ----------------- ActionSearchBar ----------------- */
interface Action {
  id: string;
  label: string;
  icon: React.ReactNode;
  description?: string;
  short?: string;
  end?: string;
  category?: string;
}

const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: { height: { duration: 0.4 }, staggerChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { height: { duration: 0.3 }, opacity: { duration: 0.2 } },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  },
} as const;

const allActionsSample: Action[] = [
  {
    id: "1",
    label: "Book tickets",
    icon: <PlaneTakeoff className="h-4 w-4 text-blue-500" />,
    description: "Operator",
    short: "⌘K",
    end: "Agent",
    category: "Travel",
  },
  {
    id: "2",
    label: "Summarize",
    icon: <BarChart2 className="h-4 w-4 text-orange-500" />,
    description: "gpt-5",
    short: "⌘cmd+p",
    end: "Command",
    category: "AI Tools",
  },
  {
    id: "3",
    label: "Screen Studio",
    icon: <Video className="h-4 w-4 text-purple-500" />,
    description: "Claude 4.1",
    end: "Application",
    category: "Apps",
  },
  {
    id: "4",
    label: "Talk to Jarvis",
    icon: <AudioLines className="h-4 w-4 text-green-500" />,
    description: "gpt-5 voice",
    end: "Active",
    category: "AI Tools",
  },
  {
    id: "5",
    label: "Kokonut UI - Pro",
    icon: <LayoutGrid className="h-4 w-4 text-blue-500" />,
    description: "Components",
    end: "Link",
    category: "Development",
  },
];

function ActionSearchBar({
  actions = allActionsSample,
}: {
  actions?: Action[];
}) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [recent, setRecent] = useState<Action[]>([]);
  const debouncedQuery = useDebounce(query, 200);

  const filteredActions = useMemo(() => {
    if (!debouncedQuery) return actions;
    const normalized = debouncedQuery.toLowerCase().trim();
    return actions.filter((action) =>
      `${action.label} ${action.description || ""}`
        .toLowerCase()
        .includes(normalized)
    );
  }, [debouncedQuery, actions]);

  const handleActionClick = useCallback((action: Action) => {
    setRecent((prev) =>
      [action, ...prev.filter((a) => a.id !== action.id)].slice(0, 5)
    );
    setIsFocused(false);
    setQuery("");
  }, []);

  return (
    <div className="w-full max-w-md relative">
      <Input
        type="text"
        placeholder="Search people, jobs, posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        className="pl-3 pr-9 py-1.5 h-9 text-sm rounded-lg"
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
        {query.length > 0 && (
          <XCircle
            onClick={() => setQuery("")}
            className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
          />
        )}
        {query.length > 0 ? (
          <Send className="w-4 h-4 text-gray-400" />
        ) : (
          <Search className="w-4 h-4 text-gray-400" />
        )}
      </div>

      <AnimatePresence>
        {isFocused && (
          <motion.div
            className="absolute mt-1 w-full border rounded-md shadow-sm overflow-hidden dark:border-gray-800 bg-white dark:bg-black z-50"
            variants={ANIMATION_VARIANTS.container}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {/* Recent */}
            {recent.length > 0 && !query && (
              <div className="p-2 border-b border-gray-100 dark:border-gray-800">
                <p className="text-xs font-medium text-gray-500 mb-1">Recent</p>
                {recent.map((r) => (
                  <div
                    key={r.id}
                    className="flex items-center gap-2 px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer rounded-md"
                    onClick={() => handleActionClick(r)}
                  >
                    <Clock className="w-3 h-3 text-gray-400" />
                    {r.label}
                  </div>
                ))}
              </div>
            )}

            {/* Results */}
            <motion.ul>
              {filteredActions.map((action, idx) => (
                <motion.li
                  key={action.id}
                  className={`px-3 py-2 flex items-center justify-between cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-zinc-900`}
                  variants={ANIMATION_VARIANTS.item}
                  onClick={() => handleActionClick(action)}
                >
                  <div className="flex items-center gap-2">
                    {action.icon}
                    <span className="text-sm font-medium">{action.label}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    {action.short && <span>{action.short}</span>}
                    {action.end && <span>{action.end}</span>}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ----------------- Navbar ----------------- */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMe, setOpenMe] = useState(false);
  const [openBiz, setOpenBiz] = useState(false);
  const { setTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/Employer/dashboard"
          className="text-xl font-bold text-blue-950 dark:text-gray-100 flex items-center gap-1"
        >
          PLC{" "}
          <span className="border-l-2 border-gray-600 ml-1.5 pl-1.5">Hire</span>
        </Link>

        {/* Desktop Search */}
        <div className="flex flex-1 justify-center">
          <ActionSearchBar />
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-6 font-medium">
          <Link href="/Employer/dashboard" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/Employer/postedjobs" className="hover:text-blue-600">
            My Jobs
          </Link>
          <Link href="/Employer/message" className="hover:text-blue-600">
            Messages <Badge color="red">3</Badge>
          </Link>
          <Link href="/Employer/notification" className="hover:text-blue-600">
            Notifications <Badge color="red">3</Badge>
          </Link>

          {/* Me Dropdown */}
          <div className="relative">
            {/* Trigger Button */}
            <button
              onClick={() => setOpenMe(!openMe)}
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <Avatar className="h-8 w-8 border cursor-pointer">
                <AvatarImage src="/user-avatar.jpg" alt="User" />
                <AvatarFallback>DF</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Me</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Dropdown */}
            {openMe && (
              <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">
                {/* Profile Section */}
                <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
                  <Avatar className="h-12 w-12 border">
                    <AvatarImage src="/user-avatar.jpg" alt="User" />
                    <AvatarFallback>DF</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      Mark John
                    </p>
                    <p className="text-green-500 dark:text-green-400 text-sm">
                      Frontend Developer
                    </p>
                    <Link
                      href="/Employer/profile"
                      className="text-xs text-blue-600 dark:text-blue-400 underline"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-3 flex gap-2">
                  <Link
                    href="/Employer/profile"
                    className="flex-1 text-center border rounded-md py-1.5 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/upgrade"
                    className="flex-1 text-center bg-blue-600 text-white rounded-md py-1.5 text-sm font-medium hover:bg-blue-700"
                  >
                    Upgrade
                  </Link>
                </div>

                <DropdownMenuSeparator />

                {/* Account Section */}
                <div className="px-3 py-2">
                  <p className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400 mb-1">
                    Account
                  </p>
                  <div className="flex flex-col gap-1">
                    <Link
                      href="/Employer/settings"
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Settings className="w-4 h-4 text-blue-500" />
                      <span>Settings & Privacy</span>
                    </Link>
                    <Link
                      href="/help"
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <HelpCircle className="w-4 h-4 text-green-500" />
                      <span>Help & Support</span>
                    </Link>
                    <Link
                      href="/language"
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Languages className="w-4 h-4 text-orange-500" />
                      <span>Language</span>
                    </Link>
                  </div>
                </div>

                <DropdownMenuSeparator />

                {/* Manage Section */}
                <div className="px-3 py-2">
                  <p className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400 mb-1">
                    Manage
                  </p>
                  <div className="flex flex-col gap-1">
                    <Link
                      href="/activity"
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <FileText className="w-4 h-4 text-purple-500" />
                      <span>Posts & Activity</span>
                    </Link>
                    <Link
                      href="/Employer/security"
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <ShieldCheck className="w-4 h-4 text-indigo-500" />
                      <span>Security</span>
                    </Link>
                  </div>
                </div>

                <DropdownMenuSeparator />

                {/* Logout */}
                <div className="px-3 py-2">
                  <Link
                    href="/logout"
                    className="flex items-center gap-2 p-2 rounded-md text-red-600 hover:bg-red-50 dark:hover:bg-gray-700"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Business Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setOpenBiz(!openBiz);
                setOpenMe(false);
              }}
              className="flex items-center hover:text-blue-600 gap-1"
            >
              <User className="w-4 h-4" /> Business
              <ChevronDown className="w-4 h-4" />
            </button>
            {openBiz && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border rounded-lg shadow-lg p-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      Business Tools
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-60">
                    <DropdownMenuLabel className="font-bold text-sm text-muted-foreground">
                      Business Tools
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem asChild>
                      <Link
                        href="/biz/analytics"
                        className="flex items-start gap-2 w-full"
                      >
                        <BarChart2 className="h-4 w-4 text-blue-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Analytics</p>
                          <p className="text-xs text-muted-foreground">
                            Track insights & performance
                          </p>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link
                        href="/Employer/job"
                        className="flex items-start gap-2 w-full"
                      >
                        <Briefcase className="h-4 w-4 text-green-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Post a Job</p>
                          <p className="text-xs text-muted-foreground">
                            Hire top talent quickly
                          </p>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link
                        href="/biz/ads"
                        className="flex items-start gap-2 w-full"
                      >
                        <Megaphone className="h-4 w-4 text-orange-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Advertise</p>
                          <p className="text-xs text-muted-foreground">
                            Promote your brand & services
                          </p>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link
                        href="/biz/ads"
                        className="flex items-start gap-2 w-full"
                      >
                        <BadgeDollarSign
                          className="h-4 w-4 text-orange-500 mt-0.5"
                          size={30}
                        />
                        <div>
                          <p className="text-sm font-medium">Easypay-Faq</p>
                          <p className="text-xs text-muted-foreground">
                            pay with safety Guide to Safe your Money
                          </p>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>

          {/* Post a Job */}
          <Link
            href="/Employer/job"
            className="bg-gray-600 text-white px-6 py-2 rounded-3xl"
          >
            Post a Job
          </Link>

          {/* Theme Switch */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Sun className="h-5 w-5 dark:hidden" />
                <Moon className="h-5 w-5 hidden dark:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Btn */}
        <button className="xl:hidden" onClick={() => setIsOpen(!isOpen)}>
          <LucideMenu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-87 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform overflow-scroll scroll-smooth xl:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <span className="font-bold">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col px-4 py-6 space-y-4">
          {/* User Profile Section */}
          <div className="flex items-center gap-3 px-4 py-4 border-b">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/user-avatar.jpg" alt="User" />
              <AvatarFallback>DF</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">David Francis</p>
              <p className="text-xs text-muted-foreground">
                Fullstack Developer
              </p>
              <Link
                href="/Employer/profile"
                onClick={() => setIsOpen(false)}
                className="text-blue-600 text-xs hover:underline"
              >
                View Profile
              </Link>
            </div>
          </div>

          {/* Theme Switch */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Sun className="h-5 w-5 dark:hidden" />
                <Moon className="h-5 w-5 hidden dark:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Business Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setOpenBiz(!openBiz);
                setOpenMe(false);
              }}
              className="flex items-center hover:text-blue-600 gap-1"
            >
              <User className="w-4 h-4" /> Business
              <ChevronDown className="w-4 h-4" />
            </button>
            {openBiz && (
              <div className="bg-gray-800 p-2 rounded-b-lg">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      Business Tools
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-60">
                    <DropdownMenuLabel className="font-bold text-sm text-muted-foreground">
                      Business Tools
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem asChild>
                      <Link
                        href="/biz/analytics"
                        className="flex items-start gap-2 w-full"
                      >
                        <BarChart2 className="h-4 w-4 text-blue-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Analytics</p>
                          <p className="text-xs text-muted-foreground">
                            Track insights & performance
                          </p>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link
                        href="/Employer/job"
                        className="flex items-start gap-2 w-full"
                      >
                        <Briefcase className="h-4 w-4 text-green-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Post a Job</p>
                          <p className="text-xs text-muted-foreground">
                            Hire top talent quickly
                          </p>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link
                        href="/biz/ads"
                        className="flex items-start gap-2 w-full"
                      >
                        <Megaphone className="h-4 w-4 text-orange-500 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Advertise</p>
                          <p className="text-xs text-muted-foreground">
                            Promote your brand & services
                          </p>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
          <Link href="/Employer/dashboard" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/Employer/message" onClick={() => setIsOpen(false)}>
            Messages
          </Link>
          <Link href="/Employer/notification" onClick={() => setIsOpen(false)}>
            Notifications <Badge color="red">3</Badge>
          </Link>
          <Link href="/Employer/job" onClick={() => setIsOpen(false)}>
            Post a Job
          </Link>
          <Link href="/Employer/postedjobs" onClick={() => setIsOpen(false)}>
            My Jobs
          </Link>
          <Link href="/settings" onClick={() => setIsOpen(false)}>
            Settings & Privacy
          </Link>
          <Link href="/sett" onClick={() => setIsOpen(false)}>
            Language
          </Link>
          <Link href="/set" onClick={() => setIsOpen(false)}>
            Help & Support
          </Link>
          <Link href="/se" onClick={() => setIsOpen(false)}>
            Post & Activity
          </Link>
          <Separator className="border-2 border-l-gray-800 dark:border-l-gray-600" />
          <Link
            href="/login/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3 w-full px-5 py-3 mt-2 rounded-2xl 
                 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold 
                 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
          >
            <div className="flex items-center justify-center bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition">
              <LogOut className="w-5 h-5 text-white" />
            </div>
            <span className="flex-1 text-left">Logout</span>
          </Link>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
