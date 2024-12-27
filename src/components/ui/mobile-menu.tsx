"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./button";
import { LogIn,  Menu,  SquareArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useTheme } from "next-themes";
import { MoonStar, Sun } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const MobileNavItem = ({
    href,
    onClick,
    children,
  }: {
    href: string;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <li>
      <Link
        href={href}
        className="block rounded-md py-4 text-base font-medium text-foreground"
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-md hover:bg-secondary-300/10"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-[300px] flex-col justify-between sm:w-[400px]"
      >
        <div>
          <SheetHeader className="mb-4">
            <SheetTitle className="text-center">Growify Menu</SheetTitle>
          </SheetHeader>
          <nav aria-label="Mobile menu">
            <ul className="space-y-1">
              <div className="mb-4 space-y-4">
                <Link href="/signin" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full justify-start">
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign in
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="outline"
                    className="mt-4 w-full justify-start"
                  >
                    <SquareArrowRight className="mr-2 h-4 w-4" />
                    Try Growify
                  </Button>
                </Link>
              </div>
              <MobileNavItem href="/scroll" onClick={() => setIsOpen(false)}>
                SCROLL
              </MobileNavItem>

              <MobileNavItem href="/gig" onClick={() => setIsOpen(false)}>
                GIG
              </MobileNavItem>
              <MobileNavItem href="/pitchroom" onClick={() => setIsOpen(false)}>
                PITCHROOM
              </MobileNavItem>
            </ul>
          </nav>
        </div>
        <div className="width-full space-y-4 pb-6">
          <div className="width-full">
            {mounted ? (
              <Button
                variant="outline"
                className="w-full justify-center"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? (
                  <>
                    <Sun strokeWidth={1} className="h-5 w-5" />
                    Light
                  </>
                ) : (
                  <>
                    <MoonStar strokeWidth={1} className="h-5 w-5" />
                    Dark
                  </>
                )}
              </Button>
            ) : null}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
