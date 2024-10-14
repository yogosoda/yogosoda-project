import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            keyframes: {
                shimmer: {
                    '0%': { backgroundPosition: '-100% 0' },
                    '100%': { backgroundPosition: '100% 0' },
                },
            },
            animation: {
                shimmer: 'shimmer 2s infinite linear',
            },
        },
    },
    plugins: [],
};
export default config;
