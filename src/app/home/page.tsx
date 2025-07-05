import { auth } from "~/lib/auth";
import { headers } from "next/headers";
import Drag from "~/components/drag";
import Selectors from "~/components/selectors";
import ThemeModal from "~/components/modal/themeModal";
import Header from "~/components/header";
import StyleModal from "~/components/modal/styleModal";

export default async function HomePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  return (
    <main className="h-full w-full bg-[var(--latte-base)]">
      <Header user={user} />
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
