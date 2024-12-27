"use client";
import { ReactNode, forwardRef, ComponentPropsWithoutRef } from "react";

import Link from "next/link";
import Image from "next/image";

import { ModeToggle } from "./moon";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import AuthButton from "./ui/authbutton";
import MobileMenu from "./ui/mobile-menu";
const NavItem = ({
  href,
  target = "_self",
  children,
}: {
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  children: ReactNode;
}) => (
  <NavigationMenuLink
    asChild
    className={navigationMenuTriggerStyle()}
    href={href}
    target={target}
  >
    <Link href={href}>{children}</Link>
  </NavigationMenuLink>
);

const ListItem = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary-300/10 hover:text-accent-foreground focus:bg-secondary-300/10 focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-gray-600/90 dark:text-gray-500">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";
export function NavBar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 p-4 transition-all duration-300 ease-in-out">
      <div className="mx-auto max-w-[1024px] ">
        <nav
          className="rounded-2xl border-[1.5px]  border-gray-200 bg-background px-2 transition-all duration-300 ease-in-out dark:border-neutral-700"
          aria-label="Main navigation"
        >
          <div className="flex h-12 items-center justify-between   ">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex flex-shrink-0 items-center"
                aria-label="Growify Home"
              >
                <Image src="/growify.svg" width={35} height={25} alt="Devlly" />
                <div className="ml-2 text-2xl  font-bold">Growify</div>
              </Link>
              <nav className="ml-4 hidden md:block" aria-label="Main menu">
                <NavigationMenu>
                  <NavigationMenuList className="flex items-center text-neutral-700 dark:text-neutral-300 ">
                    <NavItem href="/scroll">SCROLL</NavItem>
                    <NavItem href="/gig">GIG</NavItem>
                    <NavItem href="/pitchroom">PITCHROOM</NavItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
            </div>

            <div className="hidden items-center space-x-4 lg:flex">
              <AuthButton />
              <ModeToggle />
            </div>
            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
