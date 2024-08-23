import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": "0px 7px 20px rgba(0, 0, 0, 0.25)"
      },
      colors: {
        "primary": "#FF3D00",
        "secondary": "#ffba19",
        "black": "#161616",
        "lightGray": "#f1f1f1",
      },
      screens: {
        "xs": "512px",
        "3xl": "1792px",
        "4xl": "2048px",
      }
    },
  },
  plugins: [],
};
export default config;
