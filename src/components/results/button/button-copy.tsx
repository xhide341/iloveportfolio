"use client";

import { Copy } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Toaster } from "~/components/ui/sonner";
import { toast } from "sonner";

export default function ButtonCopy({ command }: { command: string }) {
  return (
    <Button variant="ghost" className="hover:bg-inherit" onClick={() => copyToClipboard(command)}>
      <Copy />
      <Toaster />
    </Button>
  );
}

async function copyToClipboard(c: string) {
  try {
    await navigator?.clipboard?.writeText(c);
    toast("Command line copied")
  } catch (e) {
    console.error(e);
  }
}
