import React from "react";
import Markdown from "react-markdown";
import { Download } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
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
        "Your portfolio website has been deployed. You can view it via **https://*username*.github.io**",
      notes: "*NOTE: It may take a few minutes for your website to be live*",
    },
  ];

  return (
    <main className="pb-10">
      <section className="item-center flex h-dvh flex-col justify-center gap-5 pb-5">
        <h1 className="text-center text-4xl font-bold">
          Your portfolio website is ready!
        </h1>
        <Button className="w-[125px] self-center">
          <Download />
          Download
        </Button>
      </section>

      <section className="pt-20">
        <h2 className="text-center text-4xl font-bold">
          Steps to deploy in GitHubPages
        </h2>
        <h3 className="pt-5 text-center text-2xl font-medium">Via Terminal</h3>
        {/* =====Ordered Lists of Steps===== */}
        <ol className="flex flex-col gap-5 pt-10">
          {/* =====Mapping the Steps===== */}
          {steps.map((item, index) => (
            <li key={index}>
              {/* ======Card Component from shadcn===== */}
              <Card className="flex flex-col items-center justify-center gap-10">
                <CardContent className="flex flex-col gap-2 text-center">
                  <h4 className="text-2xl font-medium">{item.step}</h4>
                  <span className="whitespace-pre"><Markdown>{item.instructions}</Markdown></span>
                </CardContent>
                <CardFooter className="flex w-full flex-col px-28">
                  {/* =====Checks if the item contains commandLine or notes===== */}
                  {item.commandLine ? (
                    <div className="flex w-full flex-row items-start justify-between rounded-md bg-[#EFF1F5] p-4">
                      <span>
                        <pre className="whitespace-pre">{item.commandLine}</pre>
                      </span>
                      <ButtonCopy command={item.commandLine} />
                    </div>
                  ) : (
                    <Markdown>{item.notes}</Markdown>
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
