"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

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
        <div className="hidden md:flex gap-6 items-center font-medium">
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
                  Employer-FAQ
                </Link>
                <Link
                  href="#step2"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 font-light"
                  onClick={() => setOpen(false)}
                >
                  Jobseeker-FAQ
                </Link>
                <Link
                  href="#step3"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 font-light"
                  onClick={() => setOpen(false)}
                >
                  Learn to outsource
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
            href="#main"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition font-light"
          >
            Real Result
          </Link>
          <Link
            href="#contact"
            className="hover:bg-blue-600 dark:hover:bg-blue-700 transition uppercase rounded-3xl bg-blue-900 text-white p-2.5 px-6"
          >
            Post a Project
          </Link>
          <Link
            href="#contact"
            className="hover:bg-green-600 dark:hover:bg-green-500 transition uppercase rounded-3xl bg-green-400 text-white p-2.5 px-7"
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
          className="md:hidden flex items-center text-gray-600 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-inner px-4 py-3 space-y-3 transition-transform">
          <div className="relative">
                      <Link
            href="/"
            className="block hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </Link>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center hover:text-blue-600 dark:hover:text-blue-400"
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
                  Employer-FAQ
                </Link>
                <Link
                  href="#step2"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 font-light"
                  onClick={() => setOpen(false)}
                >
                  Jobseeker-FAQ
                </Link>
                <Link
                  href="#step3"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 font-light"
                  onClick={() => setOpen(false)}
                >
                  Learn to outsource
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/pricing/"
            className="block hover:text-blue-600 dark:hover:text-blue-400"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="block hover:text-blue-600 dark:hover:text-blue-400"
          >
            Real Result
          </Link>
          <Link
            href="#main"
            className="block hover:bg-blue-600 dark:hover:bg-blue-700 transition uppercase rounded-3xl bg-blue-900 text-white p-2.5 px-6 font-bold"
          >
            Post A Project
          </Link>
          <Link
            href="#contact"
            className="block hover:bg-green-600 dark:hover:bg-green-500 transition uppercase rounded-3xl bg-green-400 text-white p-2.5 px-7 font-bold"
          >
            Post a Job
          </Link>
          <Link
            href="/login/"
            className="block text-blue-950 dark:text-gray-100 px-1 py-2 transition uppercase text-xs border-b-2 font-medium"
          >
            Login
          </Link>
          <Link
            href="/Signup/"
            className="block text-blue-950 dark:text-gray-100 px-2 py-2 transition uppercase text-xs border-b-2 font-medium"
          >
            Sign Up
          </Link>
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
      )}
    </nav>
  );
}
