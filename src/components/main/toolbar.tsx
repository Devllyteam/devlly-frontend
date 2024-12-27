"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";
import { Bold, List, AlignLeft, Image as Imageicon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  const formatText = (format: "bold" | "italic" | "underline" | "strikethrough" | "code" | "subscript" | "superscript") => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  };

  return (
    <div className="flex gap-2 border-t pt-3">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => formatText("bold")}
        className="h-8 w-8"
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        // onClick={() => formatText("left")}
        className="h-8 w-8"
      >
        <AlignLeft className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Imageicon className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <List className="h-4 w-4" />
      </Button>
    </div>
  );
}
