import { footerSections, socialMediaLinks } from "@/lib/constant";
import Link from "next/link";

import { Button } from "./ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto mt-32  max-w-6xl px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-x-2 gap-y-8 pb-12 sm:grid-cols-4 sm:gap-6 xl:grid-cols-6">
        {/* Logo and tagline */}
        <div className="col-span-full mb-2 sm:mb-8 xl:col-span-2 xl:mb-0">
          <Link className="-ml-1 flex items-center gap-2 " href="/">
            <Image src={"/growify.svg"} width={60} height={30} alt="Growify" />
            <h1 className="font-bold text-4xl text-primary-700 dark:text-white font-inter">
              Growify
            </h1>
          </Link>
        </div>

        {/* Sections with links */}
        {footerSections.map(({ title, links }, idx) => (
          <div key={idx}>
            <h5 className="font-semibold">{title}</h5>
            <ul className="mt-4 space-y-2 text-neutral-500 dark:text-neutral-400">
              {links.map(({ text, href }, idx) => (
                <li key={idx}>
                  <Link
                    href={href}
                    
                    className="text-sm hover:text-primary-600"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

   
      </div>

      <div className="flex flex-col items-center justify-between gap-2.5 border-t border-neutral-700 py-3.5 text-neutral-500 dark:text-neutral-400 sm:flex-row-reverse">
        {/* Social media links */}
        <div className="-mr-2 flex items-center gap-1">
          {socialMediaLinks.map(({ icon: Icon, link }) => (
            <Button
              key={link}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>

        {/* Copyright */}
        <span className="text-sm">
          &copy; {new Date().getFullYear()} Growify - All rights reserved.
        </span>
      </div>
    </footer>
  );
}
