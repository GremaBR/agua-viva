import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        branco: "#e1ecd6",
        azulForte: "#16c1c8",
        azulMedio: "#49cccc",
        azulFraco:"#7cd7cf",
        verdeEscuro: "#006364"
      },
    },
  },
  plugins: [],
} satisfies Config;
