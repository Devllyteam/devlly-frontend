import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PanelsTopLeft, Box, HomeIcon as House, BaggageClaim } from "lucide-react";
import { ModeToggle } from "@/components/moon";
import AnimatedPostEditor from "@/components/main/post";
import { BagIcon } from "@/components/icon";

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
                <BaggageClaim
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
                    <div className="h-10 w-10 rounded-full bg-muted" />
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
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Scroll;
