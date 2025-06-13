"use client";

import { Copy } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Toaster } from "~/components/ui/sonner";
import { toast } from "sonner";

export default function ButtonCopy({ command }: { command: string }) {
  return (
    <Button variant="ghost" onClick={() => copyToClipboard(command)}>
      <Copy />
      <Toaster />
    </Button>
  );
}

async function copyToClipboard(c: string) {
  try {
    await navigator?.clipboard?.writeText(c);
    toast("Copy to clipboard")
  } catch (e) {
    console.error(e);
  }
}
