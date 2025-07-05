"use client";

import { Copy } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Toaster } from "~/components/ui/sonner";
import { toast } from "sonner";

export function ButtonCopy({ command }: { command: string }) {
  return (
    <Button
      variant="ghost"
      className="hover:bg-inherit"
      onClick={() => copyToClipboard(command)}
    >
      <Copy />
      <Toaster />
    </Button>
  );
}

async function copyToClipboard(c: string) {
  try {
    await navigator?.clipboard?.writeText(c);
    toast("Command line copied");
  } catch (e) {
    console.error(e);
  }
}

// forwardref version
// ("use client");

// import { Copy } from "lucide-react";
// import { forwardRef } from "react";

// import { Button } from "~/components/ui/button";
// import { Toaster } from "~/components/ui/sonner";
// import { toast } from "sonner";

// ForwardRef version for compatibility with Radix `asChild`
// export const ButtonCopy = forwardRef<HTMLButtonElement, { command: string }>(
//   ({ command }, ref) => {
//     return (
//       <>
//         <Button
//           ref={ref}
//           variant="ghost"
//           className="hover:bg-inherit"
//           onClick={() => copyToClipboard(command)}
//         >
//           <Copy />
//         </Button>
//         <Toaster />
//       </>
//     );
//   }
// );

// ButtonCopy.displayName = "ButtonCopy";

// async function copyToClipboard(c: string) {
//   try {
//     await navigator?.clipboard?.writeText(c);
//     toast("Command line copied");
//   } catch (e) {
//     console.error(e);
//   }
// }
