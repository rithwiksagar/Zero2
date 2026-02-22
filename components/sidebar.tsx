import ToggleTheme from "@/hooks/ToggleTheme";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
interface sidebaritems {
  title: string;
  id: string;
  items: { title: string; href: string }[];
}
export const sidebarItems: sidebaritems[] = [
  {
    title: "Get Started",
    id: "1",
    items: [
      { title: "Introduction", href: "/" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Model Context Protocol", href: "/docs/mcp" },
    ],
  },
  {
    title: "Conversation",
    id: "2",
    items: [
      { title: "Model Selector", href: "/modelselector" },
      { title: "Message", href: "/docs/message" },
      { title: "Prompt Input", href: "/docs/prompt-input" },
      { title: "Prompt Suggestion", href: "/docs/prompt-suggestion" },
      { title: "Chain of Thought", href: "/docs/chain-of-thought" },
      { title: "Feedback Bar", href: "/docs/feedback-bar" },
    ],
  },
  {
    title: "Content",
    id: "3",
    items: [
      { title: "Markdown", href: "/docs/markdown" },
      { title: "Code Block", href: "/docs/code-block" },
      { title: "Image", href: "/docs/image" },
      { title: "File Upload", href: "/docs/file-upload" },
      { title: "Loader", href: "/docs/loader" },
    ],
  },
];
export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 z-10 h-160 w-84 bg-white/90 border border-neutral-700/20 rounded-xl mt-20 ml-10 dark:bg-neutral-950 dark:border-neutral-100/10 ">
      {sidebarItems.map((elements) => (
        <div
          key={elements.id}
          className="p-3 text-[16px] font-medium text-neutral-500 dark:text-neutral-50/70 pl-4"
        >
          {elements.title}
          {elements.items.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-neutral-900 flex flex-col font-medium py-1 pl-6 cursor-pointer text-[15px] dark:text-neutral-50/90 hover:bg-neutral-100 rounded-sm dark:hover:bg-neutral-800"
            >
              {item.title}
            </Link>
          ))}
        </div>
      ))}
      <ThemeProvider attribute="class">
        <ToggleTheme />
      </ThemeProvider>
    </div>
  );
}
