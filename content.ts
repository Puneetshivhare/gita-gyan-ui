export const content = {
  projectName: "Gita Gyan",
  icon: "🕉️",
  tagline: "Ask a question, get an answer from the Bhagavad Gita — chapter and verse cited, every time.",
  description:
    "A retrieval-augmented system built on the Bhagavad Gita: it searches by meaning across all 700 verses and answers only from what's actually in the text, with the exact chapter and verse cited alongside the original Sanskrit.",
  badges: ["FastAPI", "LangChain", "ChromaDB", "Python"],
  stats: [
    { value: "18", label: "Chapters indexed" },
    { value: "700+", label: "Verses embedded" },
    { value: "Cited", label: "Every answer sourced" },
  ],
  features: [
    {
      title: "Verse-grounded answers",
      description:
        "Every response is generated only from retrieved verses, never from the model's own memory of the text, and names the exact chapter and verse it drew from.",
    },
    {
      title: "Semantic verse search",
      description:
        "Ask in plain English or Hindi and retrieve the most relevant verses by meaning rather than keyword — grief and दुःख surface the same passages.",
    },
    {
      title: "Sanskrit alongside translation",
      description:
        "Every cited verse shows the original Sanskrit next to an English translation, instead of paraphrasing it away.",
    },
    {
      title: "Chapter-wise browsing",
      description:
        "Explore the Gita chapter by chapter alongside the Q&A view, for reading start to finish rather than only querying.",
    },
  ],
  architecture: ["FastAPI backend", "ChromaDB vector store", "LangChain retrieval", "LLM synthesis"],
  githubUrl: "https://github.com/Puneetshivhare/Vedic_Rag",
  // Category eyebrow — not a dev-stage indicator. Access is limited by
  // rate limits / data resourcing, not by how finished the project is.
  status: "Dharmic RAG",
};
