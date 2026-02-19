"use client";
import { useModelSelector } from "./ModelSelectorContext";

export default function ModelTrigger() {
  const { defaultModel, setOpen } = useModelSelector();
  return (
    <button
      className="relative bg-white/60 dark:bg-neutral-900 p-2 rounded-md border
       border-neutral-300/90 text-neutral-800/90 dark:text-neutral-50 dark:border-neutral-50/10 
       px-4 dark:hover:bg-neutral-900/90 cursor-pointer "
      onClick={() => {
        setOpen(true);
      }}
    >
      {defaultModel}
    </button>
  );
}
