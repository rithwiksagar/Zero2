"use client";

import { useModelSelector } from "./ModelSelectorContext";
import React from "react";

export default function ModelContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open, setOpen } = useModelSelector();

  return (
    <>
      {open && (
        <div className="absolute bg-neutral-900 h-84 w-76 md:w-102 rounded-md flex flex-col">
          {children}
        </div>
      )}
    </>
  );
}
