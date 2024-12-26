"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./button";
import { LogIn, LogOut, Menu, Settings, SquareArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
            <SheetTitle className="text-center">Devlly Menu</SheetTitle>
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
                    Try PearAI
                  </Button>
                </Link>
              </div>
              <MobileNavItem href="/" onClick={() => setIsOpen(false)}>
                Home
              </MobileNavItem>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="resources">
                  <AccordionTrigger>Resources</AccordionTrigger>
                  <AccordionContent>
                    <ul className="ml-4 space-y-1">
                      <MobileNavItem
                        href="/about"
                        onClick={() => setIsOpen(false)}
                      >
                        About
                      </MobileNavItem>
                      <MobileNavItem
                        href="/docs"
                        onClick={() => setIsOpen(false)}
                      >
                        Documentation
                      </MobileNavItem>
                      <MobileNavItem
                        href="https://github.com/trypear/pearai-master"
                        onClick={() => setIsOpen(false)}
                      >
                        Github
                      </MobileNavItem>
                      <MobileNavItem
                        href="/blog"
                        onClick={() => setIsOpen(false)}
                      >
                        Blog
                      </MobileNavItem>

                      <MobileNavItem
                        href="/faq"
                        onClick={() => setIsOpen(false)}
                      >
                        FAQ
                      </MobileNavItem>
                      <MobileNavItem
                        href="/changelog"
                        onClick={() => setIsOpen(false)}
                      >
                        Changelog
                      </MobileNavItem>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <MobileNavItem href="/pricing" onClick={() => setIsOpen(false)}>
                Pricing
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
