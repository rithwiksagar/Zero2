import {
  ModelContent,
  ModelInput,
  ModelItems,
  ModelSelector,
  ModelTrigger,
} from "@/app/components/ai/modelSelector";
import ToggleTheme from "@/app/hooks/ToggleTheme";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-white/95 dark:bg-black">
      <ThemeProvider attribute="class">
        <ToggleTheme />
      </ThemeProvider>
      <div className="flex h-screen items-center justify-center font-sans">
        <ModelSelector>
          <ModelTrigger />
          <ModelContent>
            <ModelInput />
            <ModelItems />
          </ModelContent>
        </ModelSelector>
      </div>
    </div>
  );
}
