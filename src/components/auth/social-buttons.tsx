"use client";

import { Button } from "~/components/ui/button";

interface SocialButtonsProps {
  onLogin: (provider: "google" | "github") => void;
}

export function SocialButtons({ onLogin }: SocialButtonsProps) {
  return (
    <div className="flex w-full flex-col gap-2 md:grid md:grid-cols-2">
      <Button
        className="w-full cursor-pointer"
        variant="outline"
        onClick={() => onLogin("github")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          role="img"
          aria-label="GitHub logo"
          className="mr-2 h-4 w-4 fill-current"
        >
          <title>GitHub</title>
          <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 0 0 8.205 11.387c.6.11.82-.26.82-.577v-2.012c-3.338.727-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.729.082-.729 1.205.086 1.838 1.24 1.838 1.24 1.07 1.834 2.809 1.304 3.495.997.11-.775.42-1.305.763-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.125-.304-.535-1.53.115-3.19 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.403c1.02.005 2.045.137 3.003.403 2.28-1.552 3.285-1.23 3.285-1.23.655 1.66.245 2.886.12 3.19.77.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.293c0 .32.215.694.825.576A12.004 12.004 0 0 0 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
        GitHub
      </Button>
      <Button
        className="w-full cursor-pointer"
        variant="outline"
        onClick={() => onLogin("google")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 533.5 544.3"
          role="img"
          aria-label="Google logo"
          className="mr-2 h-4 w-4"
        >
          <title>Google</title>
          <path
            fill="#4285F4"
            d="M533.5 278.4c0-17.4-1.6-34.1-4.7-50.3H272v95.3h146.9c-6.3 34.1-25 63-53.3 82.4v68h86.1c50.4-46.4 81.8-114.7 81.8-195.4z"
          />
          <path
            fill="#34A853"
            d="M272 544.3c72.6 0 133.6-24.2 178.1-65.7l-86.1-68c-23.9 16-54.5 25.5-92 25.5-70.7 0-130.6-47.8-152-112.1H31v70.9c44.8 88.4 136.6 149.4 241 149.4z"
          />
          <path
            fill="#FBBC05"
            d="M120 323.9c-10.5-31.3-10.5-64.9 0-96.2V156.8H31c-37.9 75.9-37.9 165.5 0 241.3l89-74.2z"
          />
          <path
            fill="#EA4335"
            d="M272 107.7c39.5-.6 77.4 14.5 106.3 41.5l79.1-79.1C408.1 24.4 341.5-1.3 272 0 167.6 0 75.8 61 31 149.4l89 70.9C141.3 155.5 201.3 107.7 272 107.7z"
          />
        </svg>
        Google
      </Button>
    </div>
  );
}
