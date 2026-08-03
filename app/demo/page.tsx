import type { Metadata } from "next";
import Nav from "@/components/Nav";
import DemoChat from "@/components/DemoChat";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Try the demo — Gita Gyan",
  description:
    "Ask a question about Bhagavad Gita Chapter 2 and get an answer grounded in a cited verse — Sanskrit, transliteration, and chapter/verse reference included.",
};

export default function DemoPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <DemoChat />
      </main>
      <Footer />
    </>
  );
}
