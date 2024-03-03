import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        primaryhover: "#1988FF",
        secondary: '#28a745', 
        secondaryhover: "#2CB74B",
        background: '#f8f9fa',
        accent: '#ff5722',
        text: '#343a40',
        textsecondary: '#6c757d',
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
      },
    },
  },
  plugins: [],
};
export default config;
