import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        sm: "0px 4px 28px -2px #00000014",
      },
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      desktop2k: "1440px",
    },
    colors: {
      white: "#FFFFFF",
      "dark-blue": {
        "00": "#003459",
        "80": "#002A48",
      },
      "neural-color": {
        "00": "#FDFDFD",
        "20": "#CCD1D2",
        "40": "#99A2A5",
        "60": "#667479",
        "80": "#242B33",
        "100": "#00171F",
      },
      yellow: {
        "40": "#FCEED5",
      },
      "blue-sea": "#00A7E7",
      "linear-gradient":
        "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
    },
  },
  plugins: [],
};
export default config;
