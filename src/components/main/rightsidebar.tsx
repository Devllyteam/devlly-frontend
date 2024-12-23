'use client'

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, X } from "lucide-react";
import { useState } from "react";
export function RightSidebar() {
   
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  
  return (
    <div
        className={`fixed inset-y-0 right-0 transform ${
          rightSidebarOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0 z-30 w-[320px] bg-background transition duration-200 ease-in-out lg:right-64 flex flex-col border-l`}
      >
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            <span className="font-medium">Notifications</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setRightSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold">Staff Picked Project!</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-muted" />
                <div className="flex-1">
                  <div className="text-sm font-medium">Project Name</div>
                  <div className="text-xs text-muted-foreground">
                    By Project Creator
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Active Discussions</h3>
            <div className="mt-4 space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-start gap-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Discussion Title</div>
                    <div className="text-xs text-muted-foreground">
                      Latest comment by @username
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
    className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden ${
       rightSidebarOpen ? "block" : "hidden"
    }`}
    onClick={() => {
     
      setRightSidebarOpen(false);
    }}
  />
      </div>
  )
}

