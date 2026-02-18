"use client";
import { AnimatePresence, easeOut, motion } from "motion/react";
import { useModelSelector } from "./ModelSelectorContext";
import React from "react";

export default function ModelContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open } = useModelSelector();

  return (
    <AnimatePresence>
      {open && (
        <motion.div 
        initial = {{
          scale: 0.98,
          opacity: 0
        }}
        animate = {{
          scale: 1,
          opacity: 1
        }}
        exit={{
          scale: 0.98,
          opacity:0
        }}
        transition={{
          duration: 0.2,
          ease: easeOut
        }}
        className="absolute bg-neutral-900 h-84 w-76 md:w-102 rounded-md flex flex-col">
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
