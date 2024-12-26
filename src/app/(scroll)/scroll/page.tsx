import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PanelsTopLeft, Box, House, BellIcon } from "lucide-react";
import PostEditor from "@/components/main/post";

export default function Home() {
  return (
    <div className="space-y-4 w-full">
      <div className="flex gap-12 justify-between  border-b pb-4">
        <h1 className="font-semibold text-base text-gray-900">Scroll</h1>

        <div>
          <Tabs defaultValue="tab-1">
            <ScrollArea>
              <TabsList className="mb-3">
                <TabsTrigger value="tab-1">
                  <House
                    className="-ms-0.5 me-1.5 opacity-60"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="tab-2" className="group">
                  <PanelsTopLeft
                    className="-ms-0.5 me-1.5 opacity-60"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  Projects
                  <Badge
                    className="ms-1.5 min-w-5 bg-primary/15 px-1 transition-opacity group-data-[state=inactive]:opacity-50"
                    variant="secondary"
                  >
                    3
                  </Badge>
                </TabsTrigger>
                <TabsTrigger value="tab-3" className="group">
                  <Box
                    className="-ms-0.5 me-1.5 opacity-60"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  Packages
                  <Badge className="ms-1.5 transition-opacity group-data-[state=inactive]:opacity-50">
                    New
                  </Badge>
                </TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </Tabs>
        </div>
        <div>
          <BellIcon />
        </div>
      </div>
      <div className="flex items-start gap-4">
        <PostEditor />
      </div>
      <div className="space-y-4">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="rounded-lg border bg-card p-4">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div className="flex-1">
                <div className="text-sm font-medium">Post Title</div>
                <div className="text-xs text-muted-foreground">
                  Posted by @username • 2h ago
                </div>
                <div className="mt-2">
                  This is a sample post content. It can contain text, images,
                  and other media.
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
