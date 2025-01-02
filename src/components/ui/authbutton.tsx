"use client";

import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function AuthButton() {
  return (
    <div className="flex items-center space-x-4">
      <div className="m-0 inline-flex rounded-lg border border-gray-300 p-0 dark:border-neutral-700">
        <Link href="/signin">
          <Button variant="ghost" className="h-8 rounded-r-none px-3 font-poppins">
            Sign in
          </Button>
        </Link>
        <div className="w-[1px] self-stretch bg-gray-300 dark:bg-neutral-700" />
        <Link href="/signup">
          <Button variant="ghost" className="h-8 rounded-l-none border-0 px-3 font-poppins">
            Sign up
          </Button>
        </Link>
      </div>
    </div>
  );
}
