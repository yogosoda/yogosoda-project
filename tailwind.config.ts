import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                cafe: ['Cafe24Ssurround', 'sans-serif'],
            },
            width: {
                'calc-92': 'calc(100% - 8%)',
            },
        },
    },
    plugins: [],
};
export default config;
