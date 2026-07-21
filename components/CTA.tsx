import { content } from "@/content";
import WaitlistButton from "./WaitlistButton";

export default function CTA() {
  return (
    <section className="bg-canvas px-6 py-24 text-center">
      <div className="mx-auto max-w-content">
        <h2 className="font-serif text-[28px] font-semibold tracking-tight text-ink">
          Curious how {content.projectName} works under the hood?
        </h2>
        <p className="mx-auto mt-3 max-w-[480px] text-[14px] text-mute">
          Full source, architecture docs, and setup instructions are on GitHub.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={content.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-primary px-6 py-3 text-[13px] font-medium text-canvas transition-transform duration-300 ease-out hover:scale-[1.04] hover:bg-primaryDeep"
          >
            View source on GitHub
          </a>
          <WaitlistButton label="Join the waitlist" variant="cta" />
        </div>
        <p className="mx-auto mt-8 max-w-[520px] text-[12px] leading-relaxed text-mute">
          This is a personal project and isn&apos;t publicly hosted, to keep rate limits and
          data resourcing manageable. Want to try it? Join the waitlist above or fork the repo
          and run it yourself.
        </p>
      </div>
    </section>
  );
}
