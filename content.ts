export const content = {
  projectName: "Gita Gyan",
  icon: "🕉️",
  tagline: "Ask a question, get an answer from the Bhagavad Gita — chapter and verse cited, every time.",
  description:
    "A retrieval-augmented Q&A system built on the Bhagavad Gita: it searches Chapter 2 by keyword match and answers only from what's actually in the text, with the exact chapter and verse cited alongside the original Sanskrit.",
  badges: ["FastAPI", "BM25", "Python"],
  stats: [
    { value: "1", label: "Chapter indexed (of 18)" },
    { value: "73", label: "Verses indexed" },
    { value: "Cited", label: "Every answer sourced" },
  ],
  features: [
    {
      title: "Verse-grounded answers",
      description:
        "Every response is built directly from a retrieved verse, never from the model's own memory of the text, and names the exact chapter and verse it drew from.",
    },
    {
      title: "Keyword-based verse search",
      description:
        "Ask in plain English and retrieve the most relevant verse by keyword match (BM25) — the current MVP; semantic search across languages is a planned upgrade.",
    },
    {
      title: "Sanskrit alongside translation",
      description:
        "Every cited verse shows the original Sanskrit and transliteration next to a plain-English gloss, instead of paraphrasing it away.",
    },
    {
      title: "Chapter-wise browsing",
      description:
        "Explore the Gita chapter by chapter alongside the Q&A view, for reading start to finish rather than only querying.",
    },
  ],
  architecture: ["FastAPI backend", "BM25 lexical retrieval", "Extractive answer synthesis"],
  githubUrl: "https://github.com/Puneetshivhare/Vedic_Rag",
  // Category eyebrow — not a dev-stage indicator. Access is limited by
  // rate limits / data resourcing, not by how finished the project is.
  status: "Dharmic RAG",
};
