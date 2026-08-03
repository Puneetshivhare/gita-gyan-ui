"use client";

import { useState } from "react";

type Citation = {
  ref: string;
  speaker: string;
  sanskrit: string;
  transliteration: string;
  gloss: string;
  score: number;
};

type AskResponse = {
  query: string;
  answer: string;
  citations: Citation[];
};

// Set NEXT_PUBLIC_API_URL once the backend is deployed (e.g. Render).
// Until then, the sample queries below show real, previously-tested
// output so the page still demonstrates the system honestly.
const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

const SAMPLE_QA: AskResponse[] = [
  {
    query: "duty without attachment to the fruits of action",
    answer:
      'The closest match is BG 2.47 (spoken by श्रीभगवान्):\n"Krishna\'s famous instruction: Arjuna has the right to perform his duty, but never to the fruits of that action — he should not be motivated by results, nor attached to inaction either."',
    citations: [
      {
        ref: "BG 2.47",
        speaker: "श्रीभगवान्",
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥२-४७॥",
        transliteration:
          "karmaṇyevādhikāraste mā phaleṣu kadācana .\nmā karmaphalaheturbhūrmā te saṅgo.astvakarmaṇi ||2-47||",
        gloss:
          "Krishna's famous instruction: Arjuna has the right to perform his duty, but never to the fruits of that action — he should not be motivated by results, nor attached to inaction either.",
        score: 10.5054,
      },
    ],
  },
  {
    query: "what happens to the soul when the body dies",
    answer:
      'The closest match is BG 2.20 (spoken by श्रीभगवान्):\n"The self is never born and never dies, Krishna says; unborn, eternal, ever-existing, ancient, it is not slain when the body is slain."',
    citations: [
      {
        ref: "BG 2.20",
        speaker: "श्रीभगवान्",
        sanskrit:
          "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः ।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे ॥२-२०॥",
        transliteration:
          "na jāyate mriyate vā kadācin nāyaṃ bhūtvā bhavitā vā na bhūyaḥ .\najo nityaḥ śāśvato.ayaṃ purāṇo na hanyate hanyamāne śarīre ||2-20||",
        gloss:
          "The self is never born and never dies, Krishna says; unborn, eternal, ever-existing, ancient, it is not slain when the body is slain.",
        score: 10.4965,
      },
    ],
  },
];

export default function DemoChat() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<AskResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usingSample, setUsingSample] = useState(false);

  async function ask(q: string) {
    if (!q.trim()) return;
    setLoading(true);
    setError(null);
    setUsingSample(false);

    if (!API_URL) {
      const sample = SAMPLE_QA.find(
        (s) => s.query.toLowerCase() === q.trim().toLowerCase()
      );
      setTimeout(() => {
        if (sample) {
          setResult(sample);
        } else {
          setError(
            "Live API isn't deployed yet — try one of the example questions below, or check back soon."
          );
        }
        setUsingSample(true);
        setLoading(false);
      }, 400);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q, top_k: 3 }),
      });
      if (!res.ok) throw new Error(`API returned ${res.status}`);
      const data: AskResponse = await res.json();
      setResult(data);
    } catch (e) {
      setError(
        "Couldn't reach the live API right now. Try one of the example questions below."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="border-b border-line bg-canvas px-6 py-20">
      <div className="mx-auto max-w-content">
        <h2 className="font-serif text-[13px] font-medium uppercase tracking-wide text-mute">
          Try it — Chapter 2 (Sankhya Yoga)
        </h2>
        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-mute">
          This MVP indexes all 73 verses of Chapter 2. Ask a question in
          plain English; the answer comes straight from the closest-matching
          verse, cited every time.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(query);
          }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. what does Krishna say about grief?"
            className="flex-1 rounded-md border border-line bg-white/60 px-4 py-3 text-[14px] text-ink placeholder:text-muteSoft focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-md bg-primary px-6 py-3 text-[14px] font-medium text-canvas transition-transform duration-300 ease-out hover:scale-[1.03] hover:bg-primaryDeep disabled:opacity-60"
          >
            {loading ? "Searching…" : "Ask"}
          </button>
        </form>

        <div className="mt-4 flex flex-wrap gap-2">
          {SAMPLE_QA.map((s) => (
            <button
              key={s.query}
              onClick={() => {
                setQuery(s.query);
                ask(s.query);
              }}
              className="rounded-full border border-line bg-white/50 px-3 py-1.5 text-[12px] text-ink/70 hover:bg-white"
            >
              {s.query}
            </button>
          ))}
        </div>

        {error && (
          <p className="mt-6 text-[13px] text-primary">{error}</p>
        )}

        {result && (
          <div className="mt-8 rounded-lg border border-line bg-white/60 p-6">
            {usingSample && !API_URL && (
              <p className="mb-3 text-[11px] uppercase tracking-wide text-muteSoft">
                Sample output (live API not deployed yet)
              </p>
            )}
            <p className="whitespace-pre-line text-[14px] leading-relaxed text-ink">
              {result.answer}
            </p>
            <div className="mt-5 space-y-4 border-t border-line pt-4">
              {result.citations.map((c) => (
                <div key={c.ref}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-[13px] font-semibold text-primary">
                      {c.ref}
                    </span>
                    <span className="text-[11px] text-muteSoft">
                      score {c.score.toFixed(2)}
                    </span>
                  </div>
                  <p className="mt-1 whitespace-pre-line font-serif text-[15px] text-ink">
                    {c.sanskrit}
                  </p>
                  <p className="mt-1 whitespace-pre-line text-[12px] italic text-mute">
                    {c.transliteration}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
