import {
  ModelContent,
  ModelInput,
  ModelItems,
  ModelSelector,
  ModelTrigger,
} from "@/app/components/ai/modelSelector";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-[#F2F0EF] dark:bg-black">
      <ModelSelector>
        <ModelTrigger />
        <ModelContent>
          <ModelInput />
          <ModelItems />
        </ModelContent>
      </ModelSelector>
    </div>
  );
}
