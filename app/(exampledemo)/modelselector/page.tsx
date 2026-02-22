import {
  ModelContent,
  ModelInput,
  ModelItems,
  ModelSelector,
  ModelTrigger,
} from "@/components/ai/modelSelector";
import ToggleTheme from "@/hooks/ToggleTheme";
import { ThemeProvider } from "next-themes";

export default function Component() {
  return (
    <div className="min-h-screen relative bg-white/95 dark:bg-black">
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
