/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens } from "fluid-tailwind";

export default {
  content: {
    files: ["./src/**/*.{html,js,jsx}", "./index.html"],
    extract,
  },
  theme: {
    screens,
    extend: {
      colors: {
        strongCyan: "hsl(172, 67%, 45%)",
        veryDarkCyan: "hsl(183, 100%, 15%)",
        darkGrayishCyan: "hsl(186, 14%, 43%)",
        grayishCyan: "hsl(184, 14%, 56%)",
        lightGrayishCyan: "hsl(185, 41%, 84%)",
        veryLightGrayishCyan: "hsl(189, 41%, 97%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        custom: ["space mono", "sans-serif"],
      },
      backgroundImage: {
        logo: "url('../src/components/assets/logo.svg')",
        dollar: "url('../src/components/assets/icon-dollar.svg')",
        person: "url('../src/components/assets/icon-person.svg')",
      },
      backgroundPosition: {
        logoMobile: "center top 2rem",
        logoDesktop: "center top 10rem",
        input: "calc(0% + 1rem) center",
      },
    },
  },
  plugins: [fluid],
};
