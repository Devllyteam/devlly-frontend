"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $createParagraphNode,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  $insertNodes,
} from "lexical";
import { $setBlocksType } from "@lexical/selection";
import {
  $createHeadingNode,
  $createQuoteNode,
  HeadingTagType,
} from "@lexical/rich-text";
import { $createListItemNode, $createListNode } from "@lexical/list";
import { $createTableNodeWithDimensions } from "@lexical/table";
import { TOGGLE_LINK_COMMAND } from "@lexical/link";
import { INSERT_HORIZONTAL_RULE_COMMAND } from "@lexical/react/LexicalHorizontalRuleNode";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Quote,
  List,
  ListOrdered,
  Type,
  Link,
  Image as ImageIcon,
  Table,
  Minus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export function ArticleToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  const formatText = (format: "bold" | "italic" | "underline") => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  };

  const formatAlign = (format: "left" | "center" | "right") => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, format);
  };

  const formatHeading = (tag: string) => {
    editor.update(() => {
      const selection = $getSelection();
      if (selection) {
        if (tag === "p") {
          $setBlocksType(selection, () => $createParagraphNode());
        } else {
          $setBlocksType(selection, () =>
            $createHeadingNode(tag as HeadingTagType)
          );
        }
      }
    });
  };

  const insertLink = () => {
    const url = prompt("Enter link URL:");
    if (url) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, { url });
    }
  };

  const insertImage = () => {
    // This is a placeholder. In a real app, you'd want to implement an image upload feature.
    const url = prompt("Enter image URL:");
    if (url) {
      //   editor.dispatchCommand(INSERT_IMAGE_COMMAND, { src: url, altText: 'Inserted image' })
    }
  };

  const insertTable = () => {
    editor.update(() => {
      const table = $createTableNodeWithDimensions(3, 3);
      $insertNodes([table]);
    });
  };

  const insertQuote = () => {
    editor.update(() => {
      const selection = $getSelection();
      if (selection) {
        $setBlocksType(selection, () => $createQuoteNode());
      }
    });
  };

  const insertList = (type: "bullet" | "number") => {
    editor.update(() => {
      const selection = $getSelection();
      if (selection) {
        const listNode = $createListNode(type);
        const listItemNode = $createListItemNode();
        listNode.append(listItemNode);
        selection.insertNodes([listNode]);
      }
    });
  };

  return (
    <div className="flex flex-wrap gap-2 border dark:border-neutral-700 rounded-lg p-2 ">
      <Select onValueChange={(value) => formatHeading(value)}>
        <SelectTrigger className="w-[180px]">
          <Type className="h-4 w-4 mr-2" />
          <SelectValue placeholder="Text style" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="p">Normal Text</SelectItem>
          <SelectItem value="h1">Heading 1</SelectItem>
          <SelectItem value="h2">Heading 2</SelectItem>
          <SelectItem value="h3">Heading 3</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="h-8" />

      <div className="flex gap-1">
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
          onClick={() => formatText("italic")}
          className="h-8 w-8"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => formatText("underline")}
          className="h-8 w-8"
        >
          <Underline className="h-4 w-4" />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-8" />

      <div className="flex gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => formatAlign("left")}
          className="h-8 w-8"
        >
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => formatAlign("center")}
          className="h-8 w-8"
        >
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => formatAlign("right")}
          className="h-8 w-8"
        >
          <AlignRight className="h-4 w-4" />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-8" />

      <div className="flex gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={insertQuote}
          className="h-8 w-8"
        >
          <Quote className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => insertList("bullet")}
          className="h-8 w-8"
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => insertList("number")}
          className="h-8 w-8"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-8" />

      <div className="flex gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={insertLink}
          className="h-8 w-8"
        >
          <Link className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={insertImage}
          className="h-8 w-8"
        >
          <ImageIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={insertTable}
          className="h-8 w-8"
        >
          <Table className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            editor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined)
          }
          className="h-8 w-8"
        >
          <Minus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
