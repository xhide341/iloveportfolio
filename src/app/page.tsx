import Header from "~/components/header";
import Drag from "~/components/drag";
import Selectors from "~/components/selectors";
import ThemeModal from "~/components/modal/themeModal";
import StyleModal from "~/components/modal/styleModal";

export default function HomePage() {
  return (
    <main className="h-full w-full bg-[var(--latte-base)]">
      <Header />
      <Drag />

      <div className="flex justify-center">
        <Selectors
          themesTrigger={<ThemeModal />}
          styleTrigger={<StyleModal />}
        />
      </div>
    </main>
  );
}
