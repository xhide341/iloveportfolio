import { Palette } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ThemeCard from "~/components/themeCard";

const ThemeModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* Pass this to Selectors */}
        <li className="flex cursor-pointer hover:text-[var(--latte-subtext)]">
          <Palette className="mr-1 h-5 w-5" />
          Themes
        </li>
      </DialogTrigger>

      <DialogContent className="flex h-[80vh] min-w-[80vw] flex-col items-center overflow-y-auto md:p-10 lg:p-20">
        <DialogTitle className="font-bold text-[var(--latte-text)] lg:text-[32px]">
          Select theme flavor
        </DialogTitle>
        <p className="-mt-2 text-[var(--latte-subtext)]">
          Explore different kinds of themes
        </p>
        <div className="mt-6 grid w-full grid-cols-2 gap-4 p-5 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <ThemeCard key={index} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ThemeModal;
