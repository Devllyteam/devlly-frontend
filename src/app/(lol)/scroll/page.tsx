import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  PanelsTopLeft,
  HomeIcon as House,
  Banknote,
  ListFilter,
} from "lucide-react";

import AnimatedPostEditor from "@/components/main/post";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";

const Scroll = () => {
  return (
    <div className="">
      <div className=" flex md:justify-between justify-evenly ">
        <h1 className="hidden md:flex font-semibold font-poppins ">Scroll</h1>
        <Tabs defaultValue="tab-1" className="">
          <ScrollArea>
            <TabsList className="mb-3  h-auto md:ml-32 -space-x-px border  dark:border-neutral-700 ">
              <TabsTrigger
                value="tab-1"
                className="relative overflow-hidden rounded-none border-r border-border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e bg-transparent "
              >
                <House
                  className="-ms-0.5 me-1.5 "
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Overview
              </TabsTrigger>
              <TabsTrigger value="tab-2">
                <PanelsTopLeft
                  className="-ms-0.5 me-1.5 "
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Projects
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="relative overflow-hidden rounded-none border-l border-border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e  "
              >
                <Banknote
                  className="h-4 w-4 -ms-0.5 me-1.5 "
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Freelance
              </TabsTrigger>
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <TabsContent value="tab-1">
            <AnimatedPostEditor />
            <div className="space-y-4 md:p-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-lg border dark:border-neutral-700 bg-card p-4"
                >
                  <div className="flex items-start gap-4">
                    <Avatar className="h-8 w-8 rounded-full border dark:border-neutral-700">
                      <AvatarImage src="/avatar.jpg" alt="User avatar" />
                      <AvatarFallback>AR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Post Title</div>
                      <div className="text-xs text-muted-foreground">
                        Posted by @username • 2h ago
                      </div>
                      <div className="mt-2">
                        This is a sample post content. It can contain text,
                        images, and other media.
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="tab-2"></TabsContent>
          <TabsContent value="tab-3"></TabsContent>
        </Tabs>
        <div className="hidden md:flex">
          <div className="flex flex-col gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Filters">
                  <ListFilter size={16} strokeWidth={2} aria-hidden="true" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-36 p-3">
                <div className="space-y-3">
                  <div className="text-xs font-medium text-muted-foreground">
                    Filters
                  </div>
                  <form className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Checkbox id="popover-filter-01" />
                      <Label
                        htmlFor="popover-filter-01"
                        className="font-normal"
                      >
                        Real Time
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="popover-filter-02" />
                      <Label
                        htmlFor="popover-filter-02"
                        className="font-normal"
                      >
                        Top Channels
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="popover-filter-03" />
                      <Label
                        htmlFor="popover-filter-03"
                        className="font-normal"
                      >
                        Last Orders
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="popover-filter-04" />
                      <Label
                        htmlFor="popover-filter-04"
                        className="font-normal"
                      >
                        Total Spent
                      </Label>
                    </div>
                    <div
                      role="separator"
                      aria-orientation="horizontal"
                      className="-mx-3 my-1 h-px bg-border"
                    ></div>
                    <div className="flex justify-between gap-2">
                      <Button size="sm" variant="outline" className="h-7 px-2">
                        Clear
                      </Button>
                      <Button size="sm" className="h-7 px-2">
                        Apply
                      </Button>
                    </div>
                  </form>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
