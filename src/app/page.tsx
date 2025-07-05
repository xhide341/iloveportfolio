import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "~/lib/auth";

export default async function MainPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/login");
  } else {
    redirect("/home");
  }
}
