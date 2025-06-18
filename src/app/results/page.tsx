import React from "react";
import Markdown from "react-markdown";
import { Download } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
import ButtonCopy from "~/components/results/button/button-copy";

export default function ResultsPage() {
  // NOTE: the "instructions" returns as an JSX components due to usecase where some of the string are styled
  // NOTE: some of the syntax contains {" "} due to prettier formatting
  type Steps = {
    step: string;
    instructions: string;
    commandLine?: string;
    notes?: string;
  };

  const steps: Steps[] = [
    {
      step: "Step 1",
      instructions:
        "Download the ZIP file and extract it to your desired directory destination",
    },
    {
      step: "Step 2",
      instructions:
        "Go to your GitHub account and create a repository named *username*.github.io\n where *username* is the username of your GitHub account",
    },
    {
      step: "Step 3",
      instructions:
        "On your desktop, navigate to the directory where you extracted\n your ZIP portfolio file and run this command on you terminal",
      commandLine: "~ $ git init",
    },
    {
      step: "Step 4",
      instructions: "Add all the files and add your first commit",
      commandLine: "~ $ git add\n" + "~ $ git commit -m " + '"first commit"',
    },
    {
      step: "Step 5",
      instructions:
        "Connect and push your portfolio through your GitHub repository",
      commandLine:
        "~ $ git remote add origin <your-repository>\n" +
        "~ $ git branch -M main\n" +
        "~ $ git push -u origin main\n",
    },
    {
      step: "Step 6",
      instructions:
        "Your portfolio website has been deployed. You can view it via\n **https://*username*.github.io**",
      notes: "*NOTE: It may take a few minutes for your website to be live*",
    },
  ];

  return (
    <main className="px-4 pb-8 md:px-6 lg:px-8">
      <section className="item-center flex h-dvh flex-col justify-center gap-5 pb-2 md:pb-2.5 lg:pb-5">
        <h1 className="text-latte-text dark:text-mocha-text text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Your portfolio website is ready!
        </h1>
        <Button className="bg-latte-text dark:bg-mocha-text text-latte-base dark:text-mocha-text p-5 w-[100px] self-center lg:w-[125px]">
          <Download />
          Download
        </Button>
      </section>

      <section className="pt-20">
        <h2 className="text-latte-text dark:text-mocha-text text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Steps to deploy in GitHubPages
        </h2>
        <h3 className="text-latte-text dark:text-mocha-text pt-5 text-center text-lg font-medium md:text-xl lg:text-2xl">
          Via Terminal
        </h3>
        {/* =====Ordered Lists of Steps===== */}
        <ol className="flex flex-col gap-5 pt-10">
          {/* =====Mapping the Steps===== */}
          {steps.map((item, index) => (
            <li key={index}>
              {/* ======Card Component from shadcn===== */}
              <Card className="bg-latte-mantle dark:bg-mocha-mantle text-latte-text dark:text-mocha-text flex flex-col items-center justify-center border-0 shadow-none lg:gap-10 lg:p-10">
                <CardContent className="flex flex-col gap-2 p-10 text-center">
                  <h4 className="text-lg font-medium md:text-xl lg:text-2xl">
                    {item.step}
                  </h4>
                  <span className="md:text-md text-sm whitespace-pre-wrap lg:text-lg">
                    <Markdown>{item.instructions}</Markdown>
                  </span>
                </CardContent>
                <CardFooter className="flex w-full flex-col px-5">
                  {/* =====Checks if the item contains commandLine or notes===== */}
                  {item.commandLine ? (
                    <div className="bg-mocha-base dark:bg-latte-base text-mocha-text dark:text-latte-text flex w-full flex-row items-start justify-between rounded-md p-4">
                      <span>
                        <pre className="whitespace-pre-wrap">
                          {item.commandLine}
                        </pre>
                      </span>
                      <HoverCard>
                        <HoverCardTrigger>
                          <ButtonCopy command={item.commandLine} />
                        </HoverCardTrigger>
                        <HoverCardContent side="top">
                          Copy to Clipboard
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  ) : (
                    <span className="px-5">
                      <Markdown>{item.notes}</Markdown>
                    </span>
                  )}
                </CardFooter>
              </Card>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
