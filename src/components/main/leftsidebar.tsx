"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Inbox, Search, Menu, House, Award,  Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BagIcon, PenIcon } from "../icon";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import {
  ArrowUpRight,
  CircleFadingPlus,
  FileInput,
  FolderPlus,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const navItems = [
  { href: "/scroll", icon: House, label: "Scroll" },
  { href: "/spotlight", icon: PenIcon, label: "Post" },
  { href: "/pitchroom", icon: Award, label: "Pitchroom" },
  { href: "/gig", icon: BagIcon, label: "Freelance" },
  { href: "/inbox", icon: Inbox, label: "Inbox" },
  { href: "/search", icon: Search, label: "Search" },
];

const LeftSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when screen size changes to large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-40 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
      <aside
        className={cn(
          "fixed inset-y-0 left-0 md:left-0 lg:left-44 z-30",
          "w-64 bg-background transition-transform duration-200 ease-in-out",
          "md:translate-x-0 md:w-20 lg:w-64 lg:ml-48",
          "flex flex-col border-r dark:border-neutral-700",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <Header />
        <Navigation />
        <Footer />
      </aside>
    </>
  );
};

const Header: React.FC = () => (
  <div className="p-6 flex items-center justify-center md:justify-start">
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/growify.svg" width={30} height={40} alt="Devlly Logo" />
      <span className="font-bold font-inter text-xl hidden md:hidden lg:inline">
        Growify
      </span>
    </Link>
  </div>
);

const Navigation: React.FC = () => (
  <nav className="flex-1 space-y-1 p-2">
    {navItems.map((item) => (
      <NavItem key={item.href} {...item} />
    ))}
    <UserProfile />
  </nav>
);

interface NavItemProps {
  href: string;
  icon: string | React.FC<{ className?: string }>;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label }) => (
  <>
    <div>
      <Link
        href={href}
        className="flex items-center gap-2  rounded-lg px-3 py-2 hover:bg-accent transition duration-200"
      >
        {React.createElement(icon, { className: "h-6 w-6 opacity-80  " })}
        <span className="hidden font-medium font-poppins lg:inline">
          {label}
        </span>
      </Link>
    </div>
  </>
);

const UserProfile = () => {
  return (
    <div className="w-full max-w-xl mx-auto p-2">
    <div className="flex items-start space-x-4 mb-4">
      <Avatar className="h-8 w-8  rounded-full border dark:border-neutral-700">
        <AvatarImage src="/avatar.jpg" alt="User profile" />
        <AvatarFallback>AR</AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0 hidden lg:block">
        <h2 className="text-sm sm:text-sm font-medium truncate">@Arihantjain</h2>
        <div className="flex items-center gap-3 mt-1 text-muted-foreground">
          <div className="flex items-center gap-1">
            <span className="text-xs sm:text-sm font-medium">100k</span>
            <span className="text-xs">followers</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs sm:text-sm font-medium">0</span>
            <span className="text-xs">following</span>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
    <div className="hidden lg:block">

    <QuickAction/>
    </div>
  </div>
  );
};
const QuickAction = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        className="w-full sm:w-auto "
       variant="secondary"
        onClick={() => setOpen(true)}
      >
        <span className="flex grow items-center">
          <Zap
            className="ms-0 me-2 sm:-ms-1 sm:me-3 text-primary-700"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <span className="text-sm sm:text-sm font-normal font-inter truncate">
            Quick Action
          </span>
        </span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground dark:border-neutral-700 opacity-100">
        <span className="text-xs">⌘</span>k
          
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Quick start">
            <CommandItem>
              <FolderPlus
                size={16}
                strokeWidth={2}
          
                aria-hidden="true"
              />
              <span>New folder</span>
              <CommandShortcut className="justify-center">⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <FileInput
                size={16}
                strokeWidth={2}
          
                aria-hidden="true"
              />
              <span>Import document</span>
              <CommandShortcut className="justify-center">⌘I</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CircleFadingPlus
                size={16}
                strokeWidth={2}
          
                aria-hidden="true"
              />
              <span>Add block</span>
              <CommandShortcut className="justify-center">⌘B</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navigation">
            <CommandItem>
              <ArrowUpRight
                size={16}
                strokeWidth={2}
          
                aria-hidden="true"
              />
              <span>Go to dashboard</span>
            </CommandItem>
            <CommandItem>
              <ArrowUpRight
                size={16}
                strokeWidth={2}
          
                aria-hidden="true"
              />
              <span>Go to apps</span>
            </CommandItem>
            <CommandItem>
              <ArrowUpRight
                size={16}
                strokeWidth={2}
          
                aria-hidden="true"
              />
              <span>Go to connections</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

const Footer: React.FC = () => (
  <div className="p-2 text-center md:text-left">
    <div className="text-sm text-muted-foreground font-inter space-x-2 hidden md:hidden lg:block">
      <Link href="#">Blog</Link>
      <Link href="#">Support</Link>
      <Link href="#">Help</Link>
      <Link href="#">Legal</Link>
    </div>
    <div className="pl-4 mt-2 text-sm text-muted-foreground font-inter">
      © 2025 Growify
    </div>
  </div>
);

export default LeftSidebar;
