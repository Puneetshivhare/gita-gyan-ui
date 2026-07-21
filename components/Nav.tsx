import { content } from "@/content";
import WaitlistButton from "./WaitlistButton";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-6">
        <span className="flex items-center gap-2 font-serif text-[16px] font-semibold tracking-tight text-ink">
          <span aria-hidden>{content.icon}</span>
          {content.projectName}
        </span>
        <div className="flex items-center gap-3">
          <WaitlistButton label="Login" variant="nav" />
          <a
            href={content.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-primary px-4 py-2 text-[13px] font-medium text-canvas transition-transform duration-300 ease-out hover:scale-[1.04] hover:bg-primaryDeep"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
