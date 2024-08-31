import Link from "next/link";

export default function Page() {
    return (
      <main>
        <h1>Protected</h1>
        <Link href="/api/auth/signout">sign out</Link>
        <Link href="/">home</Link>
      </main>
    );
  }