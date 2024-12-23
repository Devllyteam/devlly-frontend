"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import  {ModeToggle}  from "./moon";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-7 justify-between md:justify-center  items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/devlly.svg" width={40} height={40} alt="Devlly" />
              <span className="ml-2 font-bold text-xl">Devlly</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/scroll"
              className="text-sm font-medium hover:text-primary "
            >
              Scroll
            </Link>
            <Link
              href="/gig"
              className="text-sm font-medium hover:text-primary "
            >
              GIG
            </Link>
            <Link
              href="/pitchroom"
              className="text-sm font-medium hover:text-primary "
            >
              Pitchroom
            </Link>
          <Link href="/login">
          <Button variant="outline" className="">
              Log in
            </Button>
          </Link>
          <Link href="/signup">
          <Button className="">Create Profile</Button>
          </Link>
            <ModeToggle />
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground "
              >
                Scroll
              </Link>
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground "
              >
                GIG
              </Link>
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground "
              >
                Pitchroom
              </Link>
              <div className="px-3 py-2">
                <Button
                  variant="outline"
                  className="w-full justify-center "
                >
                  Log in
                </Button>
              </div>
              <div className="px-3 py-2">
                <Button className="w-full justify-center ">
                  Create Profile
                </Button>
              </div>
              <div className="px-3 py-2">
                <ModeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
