"use client";

import { Copy } from "lucide-react";

import { Button } from "~/components/ui/button";

export default function ButtonCopy({ command }: { command: string }) {
  return (
    <Button variant="ghost" onClick={() => copyToClipboard(command)}>
      <Copy />
    </Button>
  );
}

async function copyToClipboard(c: string) {
  try {
    await navigator?.clipboard?.writeText(c);
  } catch (e) {
    console.error(e);
  }
}
