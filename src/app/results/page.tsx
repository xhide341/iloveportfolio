import React from "react";
import { Card, CardContent, CardFooter } from "~/components/ui/card";

export default function ResultsPage() {
  type Steps = {
    step: string;
    instructions: string;
    commandLine?: string | string[];
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
        "Go to your GitHub account and create a repository named username.github.io where username is the username of your GitHub account",
    },
    {
      step: "Step 3",
      instructions:
        "On your desktop, navigate to the directory where you extracted your ZIP portfolio file and run this command on you terminal",
      commandLine: "~ $ git init",
    },
    {
      step: "Step 4",
      instructions: "Add all the files and add your first commit",
      commandLine: '~ $ git add . && git commit -m “first commit"',
    },
    {
      step: "Step 5",
      instructions:
        "Connect and push your portfolio through your GitHub  repository",
      commandLine: [
        "~ $ git remote add origin <your-repository>",
        "~ $ git branch -M main",
        "~ $ git push -u origin main",
      ],
    },
    {
      step: "Step 6",
      instructions:
        "Your portfolio website has been deployed. You can view it via https://username.github.io",
      notes: "NOTE: It may take a few minutes for your website to be live",
    },
  ];

  return (
    <main>
      <section>
        <h1>Your portfolio website is ready</h1>
      </section>

      <section>
        <h2>Steps to deploy in GitHubPages</h2>
        <h3>Via Terminal</h3>
        <ol>
          {steps.map((item, index) => (
            <li key={index}>
              <Card>
                <CardContent>
                  <h4>{item.step}</h4>
                  <p>{item.instructions}</p>
                </CardContent>
                <CardFooter>
                  {Array.isArray(item.commandLine) ? (
                    item.commandLine.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))
                  ) : (
                    <span>{item.commandLine ?? item.notes}</span>
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
