// src/app/protected/layout.tsx

import { redirect } from "next/navigation";
import { auth } from "../api/auth/[...nextauth]/auth";

export default async function Layout({
  children,
}) {
  const session = await auth();

  if (!session) return redirect("/");

  return <>{children}</>;
}
