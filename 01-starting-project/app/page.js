import Link from "next/link";
import HeaderComponent from "@/components/header";

export default function Home() {
  return (
    <main>
      <HeaderComponent />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
        <p>
          <Link href="/blog">Blog</Link>
        </p>
      </p>
    </main>
  );
}
