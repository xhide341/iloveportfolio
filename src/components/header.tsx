"use client";

import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-1 flex h-16 w-full items-center justify-center border-b-2 border-none bg-[var(--latte-base)] px-4 dark:bg-[var(--latte-base)]">
        <div className="flex w-full max-w-[1200px] items-center justify-between">
          <div className="flex w-full items-center">
            <div className="w-[20%] min-w-[120px]">
              <h1 className="flex text-lg font-bold text-[var(--latte-text)]">
                ilove{" "}
                <span className="text-lg font-bold text-[var(--latte-subtext)]">
                  portfolio
                </span>
              </h1>
            </div>

            <div className="hidden lg:flex lg:w-[25%]">
              <ul className="flex w-full justify-between text-sm text-[var(--latte-text)]">
                <li className="cursor-pointer hover:text-[var(--latte-subtext)]">
                  Themes
                </li>
                <li className="cursor-pointer hover:text-[var(--latte-subtext)]">
                  Styles
                </li>
                <li className="cursor-pointer hover:text-[var(--latte-subtext)]">
                  Contributors
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              className="text-[var(--latte-text)] hover:bg-[var(--latte-surface)]"
            >
              Log in
            </Button>
            <Button className="rounded-full bg-[var(--latte-surface)] text-[var(--latte-text)] hover:bg-[var(--latte-overlay)]">
              Sign up
            </Button>
          </div>
        </div>
      </header>

      <ThemeToggle />
    </>
  );
};

export default Header;
