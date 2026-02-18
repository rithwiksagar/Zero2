"use client";
import { useModelSelector } from "./ModelSelectorContext";

export default function ModelTrigger() {
  const { defaultModel, setOpen } = useModelSelector();
  return (
    <button
      className="relative bg-neutral-900 p-2 rounded-md border border-neutral-50/10 px-4 hover:bg-neutral-900/90 cursor-pointer"
      onClick={() => {
        setOpen(true);
      }}
    >
      {defaultModel}
    </button>
  );
}
