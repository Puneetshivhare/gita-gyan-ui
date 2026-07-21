import { content } from "@/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas px-6 py-8">
      <div className="mx-auto flex max-w-content items-center justify-between text-[12px] text-mute">
        <span>{content.projectName}</span>
        <span>Built by Puneet Shivhare</span>
      </div>
    </footer>
  );
}
