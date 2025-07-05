"use client";

import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

type HeaderProps = {
  user?: {
    name?: string;
    email?: string;
    image?: string | null;
  };
};

const Header = ({ user }: HeaderProps) => {
  return (
    <>
      <header className="fixed top-0 z-10 flex h-16 w-full items-center justify-center border-b-2 bg-[var(--latte-base)] px-4 dark:bg-[var(--latte-base)]">
        <div className="flex w-full max-w-[1200px] items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-10">
            {/* Logo */}
            <div className="min-w-[120px]">
              <h1 className="flex text-lg font-bold text-[var(--latte-text)]">
                ilove{" "}
                <span className="text-lg font-bold text-[var(--latte-subtext)]">
                  portfolio
                </span>
              </h1>
            </div>

            {/* Nav */}
            <div className="hidden lg:flex">
              <ul className="flex gap-8 text-sm text-[var(--latte-text)]">
                <li className="cursor-pointer hover:text-[var(--latte-subtext)]">
                  Themes
                </li>
                <li className="cursor-pointer hover:text-[var(--latte-subtext)]">
                  Styles
                </li>
                <li className="cursor-pointer hover:text-[var(--latte-subtext)]">
                  <Link href="/contributors"> Contributors</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side: welcome + theme toggle */}
          <div className="flex items-center gap-4 text-sm whitespace-nowrap text-[var(--latte-text)]">
            <span>
              {user
                ? `Welcome, ${user.name?.split(" ")[0] ?? user.email}`
                : "Welcome"}
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
