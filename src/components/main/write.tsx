"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListNode, ListItemNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { TableNode, TableCellNode, TableRowNode } from "@lexical/table";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { ArticleToolbarPlugin } from "./article";

import { PenIcon } from "../icon";

const initialConfig = {
  namespace: "article-editor",
  nodes: [
    HeadingNode,
    QuoteNode,
    ListNode,
    ListItemNode,
    CodeHighlightNode,
    CodeNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
  onError: (error: Error) => {
    console.error(error);
  },
  theme: {
    heading: {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-bold",
      h3: "text-2xl font-bold",
    },
    quote: "border-l-4  dark:border-neutral-700 pl-4 italic",
    list: {
      ol: "list-decimal ml-4",
      ul: "list-disc ml-4",
    },
    code: "bg-gray-100 rounded p-1 font-mono text-sm",
  },
};

export function WriteArticleDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm"  className="bg-card">
          <PenIcon className="h-6 w-6 hidden dark:flex" stroke=" white " />
          <PenIcon className="h-6 w-6 flex dark:hidden" stroke=" black " />
          Write Blog
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>Write Blog</DialogTitle>
        </DialogHeader>
        <div className="overflow-y-auto flex-1">
          <LexicalComposer initialConfig={initialConfig}>
            <div className="space-y-4">
              <ArticleToolbarPlugin />
              <div className="relative min-h-[500px] border dark:border-neutral-700 rounded-lg p-4">
                <RichTextPlugin
                  contentEditable={
                    <ContentEditable
                      className="outline-none min-h-[500px] prose prose-sm max-w-none"
                      aria-placeholder="Start writing your article..."
                      placeholder="Start writing your article..."
                    />
                  }
                  placeholder={null}
                  ErrorBoundary={() => null}
                />
              </div>
            </div>
            <HistoryPlugin />
            <ListPlugin />
            <LinkPlugin />
          </LexicalComposer>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="outline">Save Draft</Button>
          <Button className="">Publish</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
