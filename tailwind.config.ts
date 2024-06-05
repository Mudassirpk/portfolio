import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "m-yellow": {
          dark: "#D88A16",
          light: "#FFA722",
          35: "#998260",
        },
        "m-blue": {
          dark: "#111529",
        },
        "m-gray": { normal: "#D1CFCC", 10: "#D9D9D9" },
      },
    },
  },
  plugins: [],
};
export default config;
