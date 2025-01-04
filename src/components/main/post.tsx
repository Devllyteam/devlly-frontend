"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { WriteArticleDialog } from "./write";
import { Copy, BookOpen, Image as Imu, List } from 'lucide-react';



const prompts = [
  "What are you building?",
  "Share your latest project",
  "What did you learn today?",
  "Got any coding tips to share?",
  "Working on something exciting?",
];

export default function AnimatedPostEditor() {
  const [promptIndex, setPromptIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPromptIndex((current) => (current + 1) % prompts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl p-4 mx-auto bg-card rounded-lg border dark:border-neutral-700">
      <div className="flex flex-col sm:flex-row items-start gap-3">
        <Avatar className="w-10 h-10 hidden sm:block">
          <AvatarImage src="/avatar.jpg" alt="User avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>

        <div className="flex-1 w-full">
          <div className="relative mb-4">
            <textarea
              className="w-full bg-transparent border-none outline-none resize-none min-h-[100px]"
              placeholder={prompts[promptIndex]}
              rows={4}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between border-t dark:border-zinc-800 pt-3 gap-3 sm:gap-0">
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
              <Button variant="ghost" size="icon" className="sm:text-base text-sm">
                <Copy className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="sm:text-base text-sm">
                <List className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="sm:text-base text-sm">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="sm:text-base text-sm">
                <Imu className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              <WriteArticleDialog />
              <Button className="px-4 sm:px-6 w-full sm:w-auto">Post</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

