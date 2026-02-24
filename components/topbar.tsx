import UseToggleTheme from "@/hooks/UseToggleTheme";
import { Github } from "lucide-react";
import { ThemeProvider } from "next-themes";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="flex px-18 py-2 justify-between items-center border-b border-neutral-700/20">
    <div className="">
      <h1 className="text-2xl font-medium">Brain</h1>
    </div>
      <div className="flex gap-6">
        <Link href="https://github.com/rithwiksagar/Zero2"><Github className="size-4.5"/></Link>
        <div className="flex justify-center items-center">
        <ThemeProvider attribute="class">
          <UseToggleTheme />
        </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
