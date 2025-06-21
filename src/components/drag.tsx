"use client";

import { Button } from "./ui/button";

const Drag = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[var(--latte-base)] p-4">
      <div
        style={{
          borderColor: "rgba(var(--latte-text-rgb), 0.2)",
        }}
        className="border-opacity-20 flex h-[35vh] w-full max-w-[900px] flex-col items-center justify-center rounded-lg border-2 border-dotted p-25 font-bold text-[var(--latte-text)]"
      >
        <h1 className="mb-5 text-center md:text-[1.5rem] lg:text-[1.8rem]">
          Convert your PDF resume into portfolio website blazing fast!
        </h1>
        <Button className="rounded-full bg-[var(--latte-surface)] text-[var(--latte-text)] hover:bg-[var(--latte-overlay)]">
          Find Files
        </Button>
        <span className="mt-5 text-sm font-normal">or Drag your file</span>
      </div>
    </div>
  );
};

export default Drag;
