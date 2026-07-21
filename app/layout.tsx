import type { Metadata } from "next";
import "./globals.css";
import { content } from "@/content";

export const metadata: Metadata = {
  title: `${content.projectName} — ${content.tagline}`,
  description: content.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-canvas font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
