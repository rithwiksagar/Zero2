"use client";
import { Check } from "lucide-react";
import { useModelSelector } from "./ModelSelectorContext";
import { models } from "./constants";

export default function ModelItems() {
  const { search, setSearch, setDefaultModel, setOpen, defaultModel } =
    useModelSelector();

  const filteredModels = models.filter((model) =>
    model.names.some((n) => n.toLowerCase().includes(search.toLowerCase())),
  );
  return (
    <div className="flex-1 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:var(--color-zinc-300)_transparent] dark:[scrollbar-color:var(--color-zinc-500)_transparent]">
      {filteredModels.map((model) => (
        <div key={model.id} className="">
          <span className="text-neutral-900 font-medium dark:text-neutral-400 text-[14px] ml-2.5">
            {model.chef}
          </span>
          <div className="flex flex-col">
            {model.names.map((modelName) => (
              <div
                key={modelName}
                className={`text-neutral-700 dark:text-neutral-50 text-[14px] pl-6 pr-2 py-1 cursor-pointer hover:bg-zinc-50 dark:hover:bg-neutral-800/80 rounded-md flex justify-between items-center ${defaultModel === modelName ? "bg-zinc-100/60 dark:bg-neutral-800/30" : ""}`}
                onClick={() => {
                  setDefaultModel(modelName);
                  setOpen(false);
                  setSearch("");
                }}
              >
                {modelName}
                {defaultModel === modelName ? (
                  <Check className="size-4.5 text-neutral-700/80" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
