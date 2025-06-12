import React from "react";
import { Copy, Download } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter } from "~/components/ui/card";

export default function ResultsPage() {
  // NOTE: the "instructions" returns as an JSX components due to usecase where some of the string are styled
  // NOTE: some of the syntax contains {" "} due to prettier formatting
  type Steps = {
    step: string;
    instructions: React.ReactNode;
    commandLine?: string[];
    notes?: string;
  };

  const steps: Steps[] = [
    {
      step: "Step 1",
      instructions: (
        <p>
          Download the ZIP file and extract it to your desired directory
          destination
        </p>
      ),
    },
    {
      step: "Step 2",
      instructions: (
        <p>
          Go to your GitHub account and create a repository named{" "}
          <span className="italic">username.github.io</span>
          <br /> where username is the username of your GitHub account
        </p>
      ),
    },
    {
      step: "Step 3",
      instructions: (
        <p>
          On your desktop, navigate to the directory where you extracted your
          <br /> ZIP portfolio file and run this command on you terminal
        </p>
      ),
      commandLine: ["~ $ git init"],
    },
    {
      step: "Step 4",
      instructions: <p>Add all the files and add your first commit</p>,
      commandLine: ["~ $ git add .", '~ $ git commit -m “first commit"'],
    },
    {
      step: "Step 5",
      instructions: (
        <p>Connect and push your portfolio through your GitHub repository</p>
      ),
      commandLine: [
        "~ $ git remote add origin <your-repository>",
        "~ $ git branch -M main",
        "~ $ git push -u origin main",
      ],
    },
    {
      step: "Step 6",
      instructions: (
        <p>
          Your portfolio website has been deployed. You can view it
          <br /> via{" "}
          <span className="font-bold">
            https://<span className="italic">username</span>.github.io
          </span>
        </p>
      ),
      notes: "NOTE: It may take a few minutes for your website to be live",
    },
  ];

  return (
    <main className="pb-10">
      <section className="item-center flex h-dvh flex-col justify-center gap-5 pb-5">
        <h1 className="text-center text-4xl font-bold">
          Your portfolio website is ready!
        </h1>
        <Button className="w-[125px] self-center">
          {" "}
          <Download /> Download{" "}
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
                  {item.instructions}
                </CardContent>
                <CardFooter className="flex w-full flex-col items-start px-28">
                  {/* =====Checks if the item contains commandLine or notes===== */}
                  {item.commandLine ? (
                    <div className="flex w-full flex-row justify-between rounded-md bg-[#EFF1F5] p-4">
                      <span>
                        {/* =====Loops through item.commandLine: string[]===== */}
                        {Array.isArray(item.commandLine) &&
                          item.commandLine.map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                      </span>
                      <Copy />
                    </div>
                  ) : (
                    <p className="self-center">{item.notes}</p>
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
