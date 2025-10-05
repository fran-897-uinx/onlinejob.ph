"use client";

import ProfileSnippet from "@/components/sections/EngminiProfile";
import BlogPage from "@/components/sections/Blogs";
import Notifications from "@/components/sections/Notification";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="container mx-auto px-2 py-0 h-screen">
      {/* Deskinset-block-start: 3-column layout | Mobile: Only blog */}
      <div className="flex flex-col lg:flex-row gap-6 h-full pt-3.5">
        {/* Profile Sidebar (desktop full height) */}
        <aside className="hidden lg:flex lg:w-1/4 h-full pt-7">
          <ScrollArea className="w-full h-full fixed">
            <ProfileSnippet />
          </ScrollArea>
        </aside>

        {/* Blog (main feed, scrollable area, always visible) */}
        <main className="flex-1 h-full">
          <ScrollArea className="h-full pr-2">
            <BlogPage />
          </ScrollArea>
        </main>

        {/* Notifications Sidebar (desktop full height) */}
        <aside className="hidden lg:flex lg:w-1/4 h-full">
          <ScrollArea className="w-full h-full">
            <Notifications />
          </ScrollArea>
        </aside>
      </div>
    </div>
  );
}
