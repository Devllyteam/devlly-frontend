"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Inbox, Search, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Define navigation items
const navItems = [
  { href: "/scroll", icon: "/scroll.svg", label: "Scroll" },
  { href: "/spotlight", icon: "/pen.svg", label: "Post" },
  { href: "/gig", icon: "/bag.svg", label: "GIG" },
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
          "fixed inset-y-0 left-0 md:left-0 lg:left-52 z-30",
          "w-64 bg-background transition-transform duration-200 ease-in-out",
          "md:translate-x-0 md:w-20 lg:w-48 lg:ml-44",
          "flex flex-col border-r",
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
      <Image src="/devlly.svg" width={30} height={40} alt="Devlly Logo" />
      <span className="font-bold text-xl hidden md:hidden lg:inline">
        Devlly
      </span>
    </Link>
  </div>
);

const Navigation: React.FC = () => (
  <nav className="flex-1 space-y-1 p-2">
    {navItems.map((item) => (
      <NavItem key={item.href} {...item} />
    ))}
  </nav>
);

interface NavItemProps {
  href: string;
  icon: string | React.FC<{ className?: string }>;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label }) => (
  <Link
    href={href}
    className="flex items-center gap-2 text-base font-medium rounded-lg px-3 py-2 hover:bg-accent transition-colors duration-200"
  >
    {typeof icon === "string" ? (
      <Image src={icon} width={24} height={24} alt={`${label} icon`} />
    ) : (
      React.createElement(icon, { className: "h-5 w-5" })
    )}
    <span className="hidden md:hidden lg:inline">{label}</span>
  </Link>
);

const Footer: React.FC = () => (
  <div className="p-4 text-center md:text-left">
    <div className="text-sm text-muted-foreground space-x-2 hidden md:hidden lg:block">
      <Link href="#">Blog</Link>
      <Link href="#">Support</Link>
      <Link href="#">Help</Link>
      <Link href="#">Legal</Link>
    </div>
    <div className="p-1 text-sm text-muted-foreground">@2025 Devlly</div>
  </div>
);

export default LeftSidebar;
