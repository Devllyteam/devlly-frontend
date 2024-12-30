"use client";

import { useState, useEffect } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ToolbarPlugin } from "./toolbar";
import { WriteArticleDialog } from "./write";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const initialConfig = {
  namespace: "post-editor",
  onError: (error: Error) => {
    console.error(error);
  },
};

function CharacterCount() {
  const [editor] = useLexicalComposerContext();
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const text = editor
          .getEditorState()
          .read(() => editor.getRootElement()?.textContent || "");
        setCharCount(text.length);
      });
    });
  }, [editor]);

  return <div className="text-sm text-gray-500">{charCount} characters</div>;
}

export default function PostEditor() {
  return (
    <div className="w-full -ml-3 md:ml-0 md:mx-auto pb-4">
      <div className="border rounded-lg p-4 dark:border-neutral-700 ">
        <div className="flex items-start gap-3 mb-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg" alt="User avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <LexicalComposer initialConfig={initialConfig}>
            <div className="flex-1">
              <div className="relative
               mb-4">
                <RichTextPlugin
                  contentEditable={
                    <ContentEditable
                      className="min-h-[40px] outline-none"
                      placeholder="What's on your mind?"
                      aria-placeholder="What's on your mind?"
                    />
                  }
                  placeholder={null}
                  ErrorBoundary={() => null}
                />
              </div>
              <ToolbarPlugin />
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2 items-center">
                  <WriteArticleDialog />
                  <CharacterCount />
                </div>
                <Button>Post Now</Button>
              </div>
            </div>
          </LexicalComposer>
        </div>
      </div>
    </div>
  );
}
