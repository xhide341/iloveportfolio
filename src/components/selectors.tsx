"use client";

import { Brush, LayoutTemplate } from "lucide-react";
import { Button } from "./ui/button";

const Selectors = ({
  themesTrigger,
  styleTrigger,
}: {
  themesTrigger?: React.ReactNode;
  styleTrigger?: React.ReactNode;
}) => {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <ul className="mt-7 flex w-full max-w-[800px] items-center justify-center gap-8 text-sm text-[var(--latte-text)]">
        {themesTrigger}
        {styleTrigger}
        <li className="flex cursor-pointer hover:text-[var(--latte-subtext)]">
          <LayoutTemplate className="mr-1 h-5 w-5" />
          Sections
        </li>
        <li>
          <Button className="rounded-full bg-[var(--latte-surface)] text-[var(--latte-text)] hover:bg-[var(--latte-overlay)]">
            Generate
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Selectors;
