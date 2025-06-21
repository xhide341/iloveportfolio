import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ThemeCard from "~/components/themeCard";
import Selectors from "~/components/selectors";
import { Brush, Palette } from "lucide-react";
import StyleCard from "../styleCard";

const StyleModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <li className="flex cursor-pointer hover:text-[var(--latte-subtext)]">
          <Brush className="mr-1 h-5 w-5" />
          Style
        </li>
      </DialogTrigger>

      <DialogContent className="flex h-[80vh] min-w-[80vw] flex-col items-center overflow-y-auto md:p-10 lg:p-20">
        <DialogTitle className="font-bold text-[var(--latte-text)] lg:text-[32px]">
          Select styles
        </DialogTitle>

        <p className="-mt-2 text-[var(--latte-subtext)]">
          Choose your portfolio website style
        </p>

        <div className="mt-6 grid w-full grid-cols-2 gap-4 p-5 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <StyleCard key={index} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StyleModal;
