import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <Input
          className="flex-1"
          placeholder="Ask a question to the community?"
        />
        <Button>Post</Button>
      </div>
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="rounded-lg border bg-card p-4">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div className="flex-1">
                <div className="text-sm font-medium">Post Title</div>
                <div className="text-xs text-muted-foreground">
                  Posted by @username • 2h ago
                </div>
                <div className="mt-2">
                  This is a sample post content. It can contain text, images, and
                  other media.
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

