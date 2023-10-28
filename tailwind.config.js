/** @type {import('tailwindcss').Config} */

import typographyPlugin from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Twemoji Country Flags"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [typographyPlugin],
};
