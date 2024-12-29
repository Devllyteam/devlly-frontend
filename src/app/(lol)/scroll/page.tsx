
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PanelsTopLeft, Box, House, BellIcon } from "lucide-react";
import PostEditor from "@/components/main/post";
import { TabsContent } from "@radix-ui/react-tabs";

export default function Home() {
  return (
    <div className="space-y-4 w-full">
      <div className="flex gap-12 justify-between  border-b dark:border-neutral-700 pb-4">
        <h1 className="font-semibold text-base">Scroll</h1>

        <div>
          <Tabs defaultValue="tab-1" className="">
            <ScrollArea>
              <TabsList className="mb-3 h-auto -space-x-px border  dark:border-neutral-700 ">
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
                  <Box
                    className="-ms-0.5 me-1.5 "
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  Packages
                </TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <TabsContent value="tab-1">
              <PostEditor />
              <div className="space-y-4">
                {Array.from({ length: 15 }).map((_, i) => (
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
            <TabsContent value="tab-2">
              <PostEditor />
              <div className="space-y-4">
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
            <TabsContent value="tab-3">
              <PostEditor />
              <div className="space-y-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-lg border dark:border-neutral-700 bg-card "
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
          </Tabs>
        </div>
        <div>
          <BellIcon />
        </div>
      </div>
    </div>
  );
}
