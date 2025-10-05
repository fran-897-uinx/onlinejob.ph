"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Moon, Sun, LucideMenu, X } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@radix-ui/react-dropdown-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();
  const handleNavClick = () => setIsOpen(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between md:justify-around">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold text-blue-950 dark:text-gray-100"
        >
          PLC
          <span className="border-l-2 border-gray-600 dark:border-gray-400 ml-1.5 pl-1.5">
            Hire
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex justify-between gap-6 items-center font-medium">
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer font-light"
            >
              How it works
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            {open && (
              <div className="absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
                <Link
                  href="#step1"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 font-light"
                  onClick={() => setOpen(false)}
                >
                  Post a Project or Job
                </Link>
                <Link
                  href="#step2"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 font-light"
                  onClick={() => setOpen(false)}
                >
                  Match with Experts
                </Link>
                <Link
                  href="#step3"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 font-light"
                  onClick={() => setOpen(false)}
                >
                  Collaborate Securely
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/pricing/"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition font-light"
          >
            Pricing
          </Link>
          <Link
            href="/realresult"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition font-light"
          >
            Real Result
          </Link>
          <Link
            href="/project"
            className="hover:bg-blue-600 dark:hover:bg-blue-700 transition uppercase rounded-3xl bg-blue-900 text-white p-2.5 px-6"
          >
            Post a Project
          </Link>
          <Link
            href="/job"
            className="hover:bg-gray-400 dark:hover:bg-gray-500 transition uppercase rounded-3xl bg-gradient-to-l bg-gray-600 text-white p-2.5 px-7"
          >
            Post a Job
          </Link>
          <div className="border-l border-gray-300 dark:border-gray-700 p-2">
            <Link
              href="/login/"
              className="text-blue-950 dark:text-gray-100 px-1 py-2 transition uppercase text-xs"
            >
              Login
            </Link>
            <Link
              href="/Signup/"
              className="text-blue-950 dark:text-gray-100 px-2 py-2 transition uppercase text-xs"
            >
              Sign Up
            </Link>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
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

        {/* Mobile Menu Button */}
        <button
          className="min-lg:hidden flex items-center text-gray-600 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <LucideMenu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-84 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <span className="text-lg font-bold text-blue-950 dark:text-gray-100">
            Menu
          </span>
          <button
            className="text-gray-600 dark:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col px-4 py-6 space-y-4">
          {/* Theme Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
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
          <Link
            href="/"
            onClick={handleNavClick}
            className="hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-500 p-2 pl-3  text-black dark:text-white  px-4 py-2 rounded-lg "
          >
            Home
          </Link>
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer font-light hover:bg-gray-500 p-2 pl-1.5  text-black dark:text-white px-4 py-2 rounded-lg text-center"
            >
              How it works
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            {open && (
              <div className="absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
                <Link
                  href="#step1"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 font-light"
                  onClick={() => setOpen(false)}
                >
                  Post a Project or Job
                </Link>
                <Link
                  href="#step2"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 font-light"
                  onClick={() => setOpen(false)}
                >
                  Match with Experts
                </Link>
                <Link
                  href="#step3"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 font-light"
                  onClick={() => setOpen(false)}
                >
                  Collaborate Securely
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/pricing"
            onClick={handleNavClick}
            className="hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-500 p-2 pl-3  text-black dark:text-white px-4 py-2 rounded-lg"
          >
            Pricing
          </Link>
          <Link
            href="/realresult"
            onClick={handleNavClick}
            className="hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-500 p-2 pl-3  text-black dark:text-white px-4 py-2 rounded-lg"
          >
            Real Result
          </Link>
          <Link
            href="/project"
            onClick={handleNavClick}
            className="hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-900 p-2 pl-3  text-black dark:text-white px-4 py-2 rounded-lg"
          >
            Post a Project
          </Link>
          <Link
            href="/job"
            onClick={handleNavClick}
            className="hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-700 p-2 pl-3  text-black dark:text-white px-4 py-2 rounded-lg"
          >
            Post a Job
          </Link>
          <Separator className="bg-gray-700 dark:bg-gray-100 border-2 border-gray-700 dark:border-gray-100" />
          <Link
            href="/login/"
            onClick={handleNavClick}
            className="hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-500 p-2 pl-3  text-black dark:text-white px-4 py-1 rounded-lg"
          >
            Login
          </Link>
          <Link
            href="/Signup/"
            onClick={handleNavClick}
            className="hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-500 p-2 pl-3  text-black dark:text-white px-4 py-2 rounded-lg"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Overlay for closing sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
