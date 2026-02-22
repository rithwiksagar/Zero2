"use client";
import { Search, X } from "lucide-react";
import { useModelSelector } from "./ModelSelectorContext";

export default function ModelInput() {
  const { setOpen, setSearch } = useModelSelector();
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }
  return (
    <>
      <div className="flex justify-between items-center bg-oklch(27.4% 0.006 286.033) mx-2 my-1">
        <Search className="size-4.25 text-neutral-700/80 dark:text-neutral-100/40" />
        <input
          placeholder="Search for the model"
          className="ml-1 p-1 outline-0 placeholder:text-neutral-700/80 text-neutral-700/90 dark:text-neutral-50/90 darK:placeholder:text-neutral-100/40 placeholder:text-[14px] w-full"
          onChange={handleSearch}
        ></input>
        <button
          onClick={() => {
            setOpen(false);
            setSearch("");
          }}
        >
          <X className="size-4.5 text-neutral-700/80 dark:text-neutral-100/70 rounded-full cursor-pointer" />
        </button>
      </div>
      <div className="border-b border-neutral-300/90 dark:border-neutral-50/10"></div>
    </>
  );
}
