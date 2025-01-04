"use client";

import { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  MailPlus,
  MessageSquare,
  MoreHorizontal,
  Send,
  Smile,
} from "lucide-react";

import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  author: string;
  username: string;
  content: string;
  time: string;
  isVerified?: boolean;
  avatar?: string;
}

const messages: Message[] = [
  {
    id: "1",
    author: "Exocoding",
    username: "@ExoCoding",
    content: "Sent a link",
    time: "4h",
    isVerified: true,
    avatar: "/placeholder.svg",
  },
  {
    id: "2",
    author: "Jashwanth S Poojr",
    username: "@JashwantPooje",
    content: "please help me",
    time: "Jan 1",
    avatar: "/placeholder.svg",
  },
  {
    id: "3",
    author: "Nandini Bagga",
    username: "@nandini_bagga",
    content: "Happy New year Arihant ✨✨",
    time: "Jan 1",
    avatar: "/placeholder.svg",
  },
];

export default function Message() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  return (
    <div className="hidden lg:block p-1 fixed bottom-0 right-1 z-50">
      <Card
        className={`  transition-all duration-300 ease-in-out ${
          isExpanded
            ? "w-[400px] h-[600px]"
            : "w-[400px] h-16 shadow-[0_0px_15px_rgba(245,_245,_245,_0.5)]"
        }`}
      >
        <CardHeader
          className="p-0 border-b border-border/10 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center p-4 border-b dark:border-neutral-700 ">
            {selectedMessage ? (
              <Button
                variant="ghost"
                size="icon"
                className="mr-2"
                onClick={() => setSelectedMessage(null)}
              >
                <ChevronDown className="h-4 w-4" />
              </Button>
            ) : null}
            <CardTitle className="text-base ">
              {selectedMessage ? selectedMessage.author : "Messages"}
            </CardTitle>
            <div className="ml-auto flex gap-3 items-center">
              <Button variant="ghost" size="icon">
                <MailPlus className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <ChevronDown className="h-5 w-5" />
                ) : (
                  <ChevronUp className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </CardHeader>

        {isExpanded && !selectedMessage && (
          <CardContent className="p-0">
            <div className="flex items-center gap-2 p-4  cursor-pointer">
              <MessageSquare className="h-8 w-8 p-1.5 rounded-full " />
              <div className="flex-1">
                <h4 className="text-sm font-medium">Message requests</h4>
                <p className="text-xs text-gray-400">10 people you may know</p>
              </div>
            </div>
            <ScrollArea className="h-[480px]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="flex items-start gap-3 p-4  cursor-pointer"
                  onClick={() => setSelectedMessage(message)}
                >
                  <Avatar className="h-10 w-10">
                  <AvatarImage src="/avatar.jpg" alt={message.author} />
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium truncate">
                        {message.author}
                      </span>
                      {message.isVerified && (
                        <BadgeCheck className="h-4 w-4 rounded-full text-primary-700" />
                      )}
                      <span className="text-xs text-gray-400">
                        · {message.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 truncate">
                      {message.content}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        )}

        {isExpanded && selectedMessage && (
          <CardContent className="p-0 flex flex-col h-[calc(100%-4rem)]">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                       <AvatarImage src="/avatar.jpg"
                      alt={selectedMessage.author}
                    />
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <span className="font-medium">
                        {selectedMessage.author}
                      </span>
                      {selectedMessage.isVerified && (
                        <BadgeCheck className="h-4 w-4 rounded-full " />
                      )}
                    </div>
                    <p className="text-sm text-gray-400">
                      {selectedMessage.username}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div className="p-4 border-t border-border/10">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Start a new message"
                  className=" border-0"
                />
                <Button size="icon" variant="ghost">
                  <Smile className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
