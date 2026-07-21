import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#fbf5e9",
        canvasAlt: "#f5ecd8",
        canvasDark: "#2a1810",
        ink: "#2b1d12",
        mute: "#7a6a55",
        muteSoft: "#a5947b",
        line: "#e6d9bf",
        lineSoft: "#efe4cc",
        primary: "#9a3412",
        primaryDeep: "#7c2d12",
        gold: "#b45309",
        amber: "#b45309",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
