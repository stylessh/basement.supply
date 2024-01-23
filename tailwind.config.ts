import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 95% container with 1200px max width
      container: {
        padding: "1rem",

        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
        },
      },
    },
  },
  plugins: [],
};
export default config;
